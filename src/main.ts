import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';
import { responseDecorator } from '@decorators';
import { uzmug } from './libs/uzmug';
require('ts-node/register');

export async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.PORT ?? 3000;
  await app.register(multipart, {
    limits: {
      fileSize: 200 * 1024 * 1024, // 🚀 200 MB limit
    },
  });
  const fastifyInstance = app.getHttpAdapter().getInstance();
  await responseDecorator(fastifyInstance);

  uzmug.up().catch((err) => {
    console.error('Error running migrations:', err);
  });

  await app.listen(port).then(() => {
    console.log(`Server started at http://localhost/${port}`);
  });
}
bootstrap();
