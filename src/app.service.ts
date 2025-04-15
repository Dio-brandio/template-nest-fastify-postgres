import { User } from '@models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  constructor(@InjectModel(User) private user: typeof User) {}
  async getHello() {
    await this.user.findAll();
    return 'Hello World!';
  }
}
