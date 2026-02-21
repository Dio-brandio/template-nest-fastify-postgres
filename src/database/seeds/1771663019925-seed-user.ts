import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUser1771663019925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userTable = queryRunner.connection.getRepository('user');
    const users = userTable.create([
      {
        userId: '12345',
        firstName: 'example',
        lastName: 'user',
        email: 'user@gmail.com',
        password:
          '$2a$12$a5c3/yhXN6WwrYvr8NzPEOFQ3F8nDtYGHu3j9Q4XsTMdW2pJsVP72',
      },
    ]);
    await userTable.save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
