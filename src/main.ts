import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';
import { responseDecorator } from '@decorators';
import { FastifyAuditPlugin, LoggerMiddleware } from '@middlewares';
import { ENV } from '@config';
require('ts-node/register');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = ENV.PORT;
  await app.register(multipart);
  const fastifyInstance = app.getHttpAdapter().getInstance();

  //middlewares
  await responseDecorator(fastifyInstance);

  const auditPlugin = app.get(FastifyAuditPlugin);
  auditPlugin.apply(fastifyInstance);

  const loggerPlugin = app.get(LoggerMiddleware);
  loggerPlugin.apply(fastifyInstance);

  await app.listen(port).then(() => {
    console.log(
      `Environment:${process.env.NODE_ENV} \nServer started at http://localhost/${port}`,
    );
  });
}
bootstrap();
