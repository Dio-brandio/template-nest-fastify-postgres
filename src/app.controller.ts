import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { handleError } from '@utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    try {
      const files = [];
      for await (const part of req.files()) {
        const buffer = await part.toBuffer();
        const sizeInKB = Math.round(buffer.length / 1024);
        files.push({
          filename: part.filename,
          mimetype: part.mimetype,
          fieldname: part.fieldname,
          // buffer,
          fieldName: part.fieldname,
          size: sizeInKB,
        });
      }

      res.ok({ files });
      // res.send({
      //   status: HttpStatus.OK,
      //   message: 'Upload successful',
      //   data: await this.appService.getHello(),
      // });
    } catch (error) {
      error.message = 'Upload failed: ' + error.message;
      handleError(res, error);
    }
  }
}
