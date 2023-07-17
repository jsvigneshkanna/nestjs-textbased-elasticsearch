import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Product } from './product.interface';

@Injectable()
export class ProductsService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async search(query: string): Promise<Product[]> {
    const { body } = await this.elasticsearchService.search<any>({
      index: 'products',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['name', 'type'],
          },
        },
      },
    });
    return body.hits.hits.map((hit) => hit._source);
  }
}
