import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set the global prefix for all routes
  app.setGlobalPrefix('api');
  // Apply the global response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());
  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTO instances
    whitelist: true, // Strip properties that do not have decorators
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
  }));
  await app.listen(3000);
}
bootstrap();
