import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async searchProducts(@Query('q') query: string): Promise<Product[]> {
    console.log('gssg');

    return this.productsService.search(query);
  }
}
