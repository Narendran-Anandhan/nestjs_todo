import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(bodyParser.json());
 // JSON body parsing middleware
//  app.use(bodyParser.json());

 // URL-encoded form data parsing middleware
// app.use(bodyParser.urlencoded({ extended: true }));
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

}
bootstrap();
