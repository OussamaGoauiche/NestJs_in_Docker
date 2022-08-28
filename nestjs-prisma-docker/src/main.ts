import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.use(cookieParser());
  //app.use(csurf({ cookie: true }));

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