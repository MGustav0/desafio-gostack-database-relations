import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import IOrdersRepository from '../repositories/IOrdersRepository';

import Order from '../infra/typeorm/entities/Order';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customerExist = await this.customersRepository.findById(customer_id);

    if (!customerExist) {
      throw new AppError('This customer does not exists.');
    }

    const productsId = products.map(product => ({ id: product.id }));

    const findProducts = await this.productsRepository.findAllById(productsId);

    if (findProducts.length !== products.length) {
      throw new AppError('One or more products was not found');
    }

    /** Variável que é um array (matriz) contendo as variáveis da interface */
    const updatedQuantities: IUpdateProductsQuantityDTO[] = [];

    /** Recebe os produtos na variável "products", que é um array que recebe vários
     * produtos.
     */
    const updatedProducts = findProducts.map(findProduct => {
      /** Variável que recebe um array com os produtos de mesmo id da requisição. */
      const orderProduct = products.find(
        product => product.id === findProduct.id,
      );

      /** Verificação de quantidades em estoque */
      if (orderProduct) {
        if (findProduct.quantity < orderProduct.quantity) {
          throw new AppError(
            `
              Product ${findProduct.name} has quantity available in stock: ${findProduct.quantity}\n
              Quantity requested: ${orderProduct.quantity}
            `,
          );
        }

        /** Tendo as quantidades, executa a operação de update das quantidades. */
        updatedQuantities.push({
          id: orderProduct.id,
          quantity: findProduct.quantity - orderProduct.quantity,
        });

        /** Retorna todos os produtos e suas quantidades atualizadas */
        return {
          ...findProduct,
          quantity: orderProduct.quantity,
        };
      }

      return findProduct;
    });

    /** Atualiza a quantidade de produtos por id no BD */
    await this.productsRepository.updateQuantity(updatedQuantities);

    /** Cria a ordem contendo o id do consumidor e os produtos adicionados */
    const order = await this.ordersRepository.create({
      customer: customerExist,
      products: updatedProducts.map(product => ({
        product_id: product.id,
        price: product.price,
        quantity: product.quantity,
      })),
    });

    return order;
  }
}

export default CreateOrderService;
