import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import helmet from 'helmet';
import {nestCsrf, CsrfFilter} from 'ncsrf';
import cookieParser from 'cookie-parser';
import * as compression from 'compression';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(compression());
  app.use(cookieParser());
  app.use(nestCsrf());
  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new CsrfFilter);
  const config = new DocumentBuilder()
    .setTitle('API de Xcard')
    .setDescription('La description De API de Xcard pour aider  developers de frontend')
    .setVersion('1.0')
    .addTag('Xcard')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();