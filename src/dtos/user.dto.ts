// import { ROLES } from '@constants';
import { AuditFieldsDTO, BaseQueryParamsDTO } from './common.dtos';
import {
  GENDER,
  ROLE,
} from '@constants';

export interface IUserToken {
  id: string;
  email?: string;
  roleName: string;
  phoneNumber: string;
}

export class SendOTPDTO {
  phoneNumber: string;
  deviceToken?: string;
}

export class VerifyOTP {
  phoneNumber: string;
  id?: string;
  otp: string;
}

export class UserLoginDTO {
  phone: string;
  email: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface Payload {
  exp: number;
  iat: number;
  iss: string;
  user: any;
  _id: string;
}

export interface IOTP {
  userId?: string;
  otp: string;
  phoneNumber: string;
  email?: string;
  role?: string;
}

export interface UserParamDTO extends AuditFieldsDTO {
  phoneNumber?: string;
  email?: string;
  role?: string;
}

export interface UserQueryParamDTO extends BaseQueryParamsDTO {
  phoneNumber?: string;
  email?: string;
  role?: string;
}

export class ModifyPasswordDTO {
  token: string;
  password: string;
  userId: string;
  oldPassword: string;
  isResetLink: boolean;
}



export interface ICurrentUser {
  id: string;
  roleName: ROLE;
  isAdmin: boolean;
  isTherapist: boolean;
  isUser: boolean;
}

export interface IUpdateUserProfileDTO {
  firstName?: string;
  profilePicture?: string;
  gender?: GENDER;
  birthDate?: string | Date;
  updatedBy?: string;
  loginDevice?: string;
  appVersion?: string;
  isProfileSetup?: boolean;
}

