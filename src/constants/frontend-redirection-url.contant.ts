import { ENV } from 'src/config/env';

export const FRONTEND_REDIRECTION_URL = {
  USER_DASHBOARD: '/dashboard',
  ADMIN_DASHBOARD: '/admin/dashboard',
  PASSWORD_RESET: (token: string) =>
    `${ENV.FRONTEND_URL}?modal=reset-password&token=${token}`,
  OAUTH_SUCCESS: (token: string, refreshToken: string) =>
    `${ENV.FRONTEND_URL}/?oauth=success&token=${token}&refreshToken=${refreshToken}`,
  OAUTH_ERROR: (errorMsg: string) =>
    `${ENV.FRONTEND_URL}/?oauth=fail&message=${errorMsg}`,
};
