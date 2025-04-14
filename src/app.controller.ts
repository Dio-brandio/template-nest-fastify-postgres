import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async getHello(@Req() req: FastifyRequest, @Res() res: FastifyReply) {
    try {
      const files = [];
      for await (const part of req.files()) {
        const buffer = await part.toBuffer(); // Read the file buffer
        files.push({
          filename: part.filename,
          mimetype: part.mimetype,
          fieldname: part.fieldname,
          buffer,
          fieldName: part.fieldname,
        });
      }

      // res.send({
      //   status: HttpStatus.OK,
      //   message: 'Upload successful',
      //   data: await this.appService.getHello(),
      // });
    } catch (error) {
      res.send({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Upload failed: ' + error.message,
        data: null,
      });
    }
  }
}
