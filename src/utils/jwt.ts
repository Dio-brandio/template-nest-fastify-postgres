import { EncryptJWT, jwtDecrypt } from 'jose';
import { type Tokens, type UserParamDTO, type IUserToken } from '@dtos';
import { Messages, statusCodes } from '@constants';
import { ENV } from '@config';

const code: string = ENV.JWT.SECRET;
const encHeader = { alg: 'dir', enc: 'A256GCM' };

export const createTokens = async (user: IUserToken): Promise<Tokens> => {
  const expiryTime: string = ENV.JWT.ACCESSTOKENTIME ?? '10m';
  const refreshTime: string = ENV.JWT.REFRESHTOKENTIME ?? '1d';
  const secret = new TextEncoder().encode(code);

  const token = new EncryptJWT({ user })
    .setProtectedHeader(encHeader)
    .setIssuedAt()
    .setIssuer(user.id.toString());

  const accessToken: string = await token
    .setExpirationTime(expiryTime)
    .encrypt(secret);
  const refreshToken: string = await token
    .setExpirationTime(refreshTime)
    .encrypt(secret);

  return { accessToken, refreshToken };
};

export const jwtTokenVerifier = async (token: string): Promise<any> => {
  try {
    const secret = new TextEncoder().encode(code);
    const { payload } = await jwtDecrypt(token, secret, {
      contentEncryptionAlgorithms: ['A256GCM'],
      keyManagementAlgorithms: ['dir'],
    });
    if (!payload) {
      return {
        status: statusCodes.error_status,
        message: Messages.tokenError,
        success: false,
      };
    }
    return {
      payload,
      success: true,
    };
  } catch (error) {
    return {
      status: statusCodes.error_status,
      message: error.message,
      success: false,
    };
  }
};

// need to work around after
// export const decodeToken = async (token: any) => {
//   const jwtToken = token;
//   try {
//     const decoded = await jwtTokenVerifier(jwtToken);
//     return decoded;
//   } catch (error) {
//     return {
//       status: statusCodes.error_status,
//       message: error.message,
//       success: false,
//     };
//   }
// };

export const emailJWTToken = async (user: UserParamDTO) => {
  const expiryTime: string = ENV.JWT.ACCESSTOKENTIME ?? '10m';
  const secret = new TextEncoder().encode(code);

  const token = await new EncryptJWT({ user })
    .setProtectedHeader(encHeader)
    .setIssuedAt()
    .setIssuer(user._id.toString())
    .setExpirationTime(expiryTime)
    .encrypt(secret);

  return token;
};
