import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'https://localhost:9200', // Replace with your Elasticsearch instance URL
      auth: {
        username: 'elastic', // Replace with your Elasticsearch username
        password: 'ZUiMhVFzDG+1Fvm8Q3L9', // Replace with your Elasticsearch password
      },
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
