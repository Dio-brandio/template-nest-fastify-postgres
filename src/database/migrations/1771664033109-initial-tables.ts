import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialTables1771664033109 implements MigrationInterface {
    name = 'InitialTables1771664033109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role_permission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "roleId" uuid NOT NULL, "moduleName" character varying NOT NULL, "moduleDisplayName" character varying NOT NULL, "create" boolean NOT NULL DEFAULT false, "update" boolean NOT NULL DEFAULT false, "read" boolean NOT NULL DEFAULT false, "delete" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96c8f1fd25538d3692024115b47" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "displayName" character varying NOT NULL, "roleName" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'ACTIVE', "description" text, "isDeleted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "roleId" uuid NOT NULL, "firstName" character varying DEFAULT '', "lastName" character varying DEFAULT '', "email" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'ACTIVE', "password" character varying, "tempPassword" character varying, "lastLoginAt" TIMESTAMP WITH TIME ZONE, "defaultLocation" character varying DEFAULT '', "locationMetadata" jsonb DEFAULT '{}', "avatarUrl" character varying DEFAULT '', "avatarKey" character varying, "firebaseToken" character varying, "isDeleted" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f8a889c4362d78f056960ca6dad" UNIQUE ("userId"), CONSTRAINT "UQ_de87485f6489f5d0995f5841952" UNIQUE ("email"), CONSTRAINT "REL_446fb0cc55eed0065ececcc889" UNIQUE ("roleId"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "system_activity_log" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "adminId" uuid, "action" character varying NOT NULL, "status" character varying NOT NULL, "description" text, "ipAddress" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9d929580e2ea3004125c8631259" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "notificationType" character varying(255) NOT NULL, "userId" uuid NOT NULL, "title" character varying(255) NOT NULL, "message" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "isRead" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8840aac86dec5f669c541ce67d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_social_login" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "provider" character varying(20) NOT NULL, "providerUserId" character varying(512) NOT NULL, "email" character varying(255), "profileData" jsonb NOT NULL DEFAULT '{}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3a028268cafe893406a9907f9f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ce80fddc83a65f5a6fbcdd518e" ON "user_social_login" ("email") `);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "firstName" character varying DEFAULT '', "lastName" character varying DEFAULT '', "email" character varying NOT NULL, "password" character varying, "avatarUrl" character varying DEFAULT '', "avatarKey" character varying, "status" character varying NOT NULL DEFAULT 'ACTIVE', "firebaseToken" character varying, "isDeleted" boolean NOT NULL DEFAULT false, "lastPasswordChangeAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reset_password_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c6f6eb8f5c88ac0233eceb8d385" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "otp" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "code" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "metadata" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_32556d9d7b22031d7d0e1fd6723" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_463cf01e0ea83ad57391fd4e1d" ON "otp" ("email") `);
        await queryRunner.query(`CREATE TABLE "notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "title" character varying NOT NULL, "message" text NOT NULL, "notificationType" character varying array NOT NULL, "createdBy" uuid NOT NULL, "scheduledAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cron_log" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cronName" character varying NOT NULL, "status" character varying, "message" character varying, "error" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3cad307b59feb060aa1f175646b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "audit_log" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "ip" character varying, "method" character varying NOT NULL, "url" character varying NOT NULL, "requestBody" json, "responseBody" json, "statusCode" integer NOT NULL, "userId" uuid DEFAULT NULL, "adminId" uuid DEFAULT NULL, "message" character varying NOT NULL, "oldValues" json, "newValues" json, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_07fefa57f7f5ab8fc3f52b3ed0b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "role_permission" ADD CONSTRAINT "FK_e3130a39c1e4a740d044e685730" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_446fb0cc55eed0065ececcc889b" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system_activity_log" ADD CONSTRAINT "FK_b8e4a4af6b9ef92e59badf156dc" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "system_activity_log" ADD CONSTRAINT "FK_d4ed05e00e49a7c7310ae4046ae" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_notification" ADD CONSTRAINT "FK_dce2a8927967051c447ae10bc8b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_social_login" ADD CONSTRAINT "FK_62e5735dce7c04ae79a22f58df9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notification" ADD CONSTRAINT "FK_1d6cdd084a644f0bfeba1a06db5" FOREIGN KEY ("createdBy") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notification" DROP CONSTRAINT "FK_1d6cdd084a644f0bfeba1a06db5"`);
        await queryRunner.query(`ALTER TABLE "user_social_login" DROP CONSTRAINT "FK_62e5735dce7c04ae79a22f58df9"`);
        await queryRunner.query(`ALTER TABLE "user_notification" DROP CONSTRAINT "FK_dce2a8927967051c447ae10bc8b"`);
        await queryRunner.query(`ALTER TABLE "system_activity_log" DROP CONSTRAINT "FK_d4ed05e00e49a7c7310ae4046ae"`);
        await queryRunner.query(`ALTER TABLE "system_activity_log" DROP CONSTRAINT "FK_b8e4a4af6b9ef92e59badf156dc"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_446fb0cc55eed0065ececcc889b"`);
        await queryRunner.query(`ALTER TABLE "role_permission" DROP CONSTRAINT "FK_e3130a39c1e4a740d044e685730"`);
        await queryRunner.query(`DROP TABLE "audit_log"`);
        await queryRunner.query(`DROP TABLE "cron_log"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_463cf01e0ea83ad57391fd4e1d"`);
        await queryRunner.query(`DROP TABLE "otp"`);
        await queryRunner.query(`DROP TABLE "reset_password_token"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce80fddc83a65f5a6fbcdd518e"`);
        await queryRunner.query(`DROP TABLE "user_social_login"`);
        await queryRunner.query(`DROP TABLE "user_notification"`);
        await queryRunner.query(`DROP TABLE "system_activity_log"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "role_permission"`);
    }

}
