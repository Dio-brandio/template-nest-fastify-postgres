import { RoleStatus } from 'src/constants/role-status.constant';
import { toCamelCase } from 'src/utils/helpers';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedSuperadminRole1765539879507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roleTable = queryRunner.connection.getRepository('role');
    const initialRoles = roleTable.create([
      {
        displayName: 'Super Admin',
        roleName: toCamelCase('Super Admin'),
        description: 'Role with all permissions',
        status: RoleStatus.ACTIVE,
        isDeleted: false,
      },
      {
        displayName: 'Admin',
        roleName: toCamelCase('admin'),
        description: 'Role with Admin permissions',
        status: RoleStatus.ACTIVE,
        isDeleted: false,
      },
    ]);
    await roleTable.save(initialRoles);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM role WHERE role_name IN ('superAdmin', 'admin', 'editor')`,
    );
  }
}
