import { NestFactory } from '@nestjs/core';
import { ProductModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
