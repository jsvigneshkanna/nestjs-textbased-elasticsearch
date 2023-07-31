import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './product.interface';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            search: jest.fn().mockResolvedValue([
              {
                name: 'Product 1',
                price: 10,
                in_stock: 100,
                type: 'Type A',
              },
              {
                name: 'Product 2',
                price: 15,
                in_stock: 50,
                type: 'Type B',
              },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productsService = module.get<ProductsService>(ProductsService);
  });

  describe('searchProducts', () => {
    it('should call productsService.search and return products', async () => {
      const query = 'some search query';
      const result: Product[] = await controller.searchProducts(query);

      expect(productsService.search).toHaveBeenCalledWith(query);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Product 1');
      expect(result[1].name).toBe('Product 2');
    });
  });
});
