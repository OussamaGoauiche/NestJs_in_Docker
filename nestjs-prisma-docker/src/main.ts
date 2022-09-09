import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import helmet from 'helmet';
import {nestCsrf, CsrfFilter} from 'ncsrf';
import cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './HttpExceptionFilter';

async function bootstrap() {
    const httpsOptions = {
    key: fs.readFileSync('C:/Users/LENOVO/Desktop/project/paypal/paypal/src/secrets/key.pem'),
    cert: fs.readFileSync('C:/Users/LENOVO/Desktop/project/paypal/paypal/src/secrets/cert.pem'),
  };
  const server = express();
  const app = await NestFactory.create(AppModule, 
    new ExpressAdapter(server),);
  //app.use(compression());
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted:true
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(nestCsrf());
  app.enableCors();
  app.use(helmet());
  app.useGlobalFilters(new CsrfFilter);
  app.setGlobalPrefix('Xcard');
  const config = new DocumentBuilder()
    .setTitle('API de Xcard')
    .setDescription('La description De API de Xcard pour aider  developers de frontend')
    .setVersion('2.0')
    .addTag('Xcard')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
   await app.init();
  http.createServer(server).listen(3000);
  https.createServer(httpsOptions, server).listen(443);
}
bootstrap();