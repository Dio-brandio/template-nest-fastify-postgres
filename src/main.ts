import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';
import { responseDecorator } from '@decorators';
import { uzmug } from './libs/uzmug';
import { FastifyAuditPlugin, LoggerMiddleware } from '@middlewares';
require('ts-node/register');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.PORT ?? 3000;
  await app.register(multipart);
  const fastifyInstance = app.getHttpAdapter().getInstance();

  //middlewares
  await responseDecorator(fastifyInstance);

  const auditPlugin = app.get(FastifyAuditPlugin);
  auditPlugin.apply(fastifyInstance);

  const loggerPlugin = app.get(LoggerMiddleware);
  loggerPlugin.apply(fastifyInstance);

  uzmug.up().catch((err) => {
    console.error('Error running migrations:', err);
  });

  await app.listen(port).then(() => {
    console.log(`Server started at http://localhost/${port}`);
  });
}
bootstrap();
