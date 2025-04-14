import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import multipart from '@fastify/multipart';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.PORT ?? 3000;
  await app.register(multipart);
  await app.listen(port).then(() => {
    console.log(`Server started at http://localhost/${port}`);
  });
}
bootstrap();
