import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema<any>) { }

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (metadata.type === 'param') return value;
      return this.schema.parse(value);
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        console.log(err);

        const formattedErrors = err.errors.map((error) => {
          // error.path is an array of keys leading to the error
          const field = error.path.join('.');
          return `${field ? field + ' ' : ''}${error.message}`;
        });
        throw new BadRequestException(formattedErrors.join('; '));
      }
      throw new BadRequestException('Validation failed');
    }
  }
}
