import { config } from 'dotenv';
import { existsSync } from 'fs';
import * as path from 'path';

function initConfig() {
  // const env = process.env.NODE_ENV || "dev";
  // const envFile = env === "prod" ? ".env" : `.env.${env}`;
  const envFile = '.env';
  const envPath = path.resolve(process.cwd(), envFile);
  if (existsSync(envPath)) {
    console.log(`Loading environment variables from: ${envPath}`);
    config({ path: envPath });
  }
}

initConfig();
const getEnvVariable = (key: string, defaultValue?: string) => {
  if (process.env[key]) return process.env[key];
  else if (defaultValue) return defaultValue;
  else {
    throw new Error(`Environment Variable for ${key} not found `);
  }
};

const ENV = {
  PORT: Number(getEnvVariable('PORT', '4000')),
  BCRYPT_SALT: Number(getEnvVariable('BCRYPT_SALT', '10')),
  OTP_EXPIRES_IN_MINUTES: Number(
    getEnvVariable('OTP_EXPIRES_IN_MINUTES', '10'),
  ),
  FORGOT_PASSWORD_EXPIRES_IN_MINUTES: Number(
    getEnvVariable('FORGOT_PASSWORD_EXPIRES_IN_MINUTES', '10'),
  ),
  FRONTEND_URL: getEnvVariable('FRONTEND_URL', 'localhost:3000'),
  DB: {
    // URL: getEnvVariable('DB_URL'),
    TYPE: getEnvVariable('DB_TYPE', 'postgres'),
    HOST: getEnvVariable('DB_HOST'),
    PORT: Number(getEnvVariable('DB_PORT')),
    USERNAME: getEnvVariable('DB_USERNAME'),
    PASSWORD: getEnvVariable('DB_PASSWORD'),
    DATABASE: getEnvVariable('DB_DATABASE'),
    SSL: getEnvVariable('DB_SSL', 'false') === 'true',
  },
  NODEMAILER: {
    MAIL_FROM: getEnvVariable('MAIL_FROM', 'support@mail.com'),
    HOST: getEnvVariable('SMTP_HOST'),
    PORT: Number(getEnvVariable('SMTP_PORT', '587')),
    SECURE: getEnvVariable('SMTP_SECURE', 'false') === 'true',
    AUTH: {
      user: getEnvVariable('SMTP_USER'),
      pass: getEnvVariable('SMTP_PASS'),
    },
  },
  JWT: {
    SECRET: getEnvVariable('JWT_SECRET'),
    ACCESSTOKENTIME: getEnvVariable('JWT_ACCESSTOKENTIME', '1d'),
    REFRESHTOKENTIME: getEnvVariable('JWT_REFRESHACCESSTOKENTIME', '15d'),
  },
  GOOGLE_OAUTH: {
    CLIENT_ID: getEnvVariable('GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_ID'),
    CLIENT_SECRET: getEnvVariable(
      'GOOGLE_CLIENT_SECRET',
      'GOOGLE_CLIENT_SECRET',
    ),
    REDIRECT_URI: getEnvVariable('GOOGLE_REDIRECT_URI', 'GOOGLE_REDIRECT_URI'),
  },
  CRYPTO: {
    SECRET: getEnvVariable('CRYPTO_SECRET'),
  },
  REDIS: {
    HOST: getEnvVariable('REDIS_HOST'),
    PORT: Number(getEnvVariable('REDIS_PORT')),
  },
  isDev: process.env.NODE_ENV === 'dev',
  isStage: process.env.NODE_ENV === 'stage',
  isProd: process.env.NODE_ENV === 'prod',
};

export { initConfig, ENV };
