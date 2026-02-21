export const Messages = {
  // admin auth
  admin: {
    auth: {
      invalidCredentials: 'Invalid email or password',
      loginSuccess: 'Login successful',
    },

    profile: {
      notFound: 'Admin profile not found',
      accountNotActive: 'Your account is not active. Please contact support.',
      accountBlocked: 'Your account has been blocked. Please contact support.',
    },
  },
  //common error
  invalidToken: 'Invalid Token',
  unauthorized: 'Your session is expired. Please login again.',
  forbidden: 'You do not have permission to access this resource',
  resourceNotFound: (resourceName: string) => `${resourceName} not found`,

  //common success
  success: 'Request completed successfully',

  role: {
    created: 'Role created successfully',
    updated: 'Role updated successfully',
    deleted: 'Role deleted successfully',
    notFound: 'Role not found',
    alreadyExists: 'Role with this name already exists',
  },

  permission: {
    updated: 'Permissions updated successfully',
    retrieved: 'Permissions retrieved successfully',
  },

  user: {
    auth: {
      loginSuccess: 'Login successful',
      registerSuccess: 'Registration successful',
      logoutSuccess: 'Logout successful',
      invalidCredentials: 'Invalid email or password',
      captchaRequired:
        'Captcha verification is required after multiple failed login attempts',
      captchaInvalid: 'Captcha verification failed',
      accountNotActive: 'Your account is not active. Please contact support.',
      accountBlocked: 'Your account has been blocked. Please contact support.',
      tooManyLoginAttempts: 'Too many login attempts. Please try again later.',
      emailAlreadyRegistered: 'This email is already registered.',
      oldPasswordIncorrect: 'The old password you entered is incorrect.',
      tokenRefreshSuccess: 'Token refreshed successfully',
      invalidRefreshToken: 'Invalid or expired refresh token',

      //otp messages
      otpInvalid: 'The provided OTP is invalid.',
      otpExpired: 'The provided OTP has expired.',
      otpSent: 'OTP has been sent to your email address.',

      // errror message if a social signin user tries to login with email/password
      socialUserLoginError:
        'This email is registered via social login. Please use social login to access your account.',
      // error message if a social signin user tries to request forgot password with email
      socialUserForgotPasswordError:
        'This email is registered via social login. Password reset is not available.',
      // forgot password
      passwordResetMailSent:
        'Password reset email has been sent to your email address.',
      passwordResetOtpSent:
        'Password reset OTP has been sent to your email address.',
      passwordResetSuccess: 'Your password has been reset successfully.',
      emailNotAssociated: 'No account found with the provided email address.',
      invalidPasswordResetToken:
        'The password reset token is invalid or has expired.',
    },
  },

  userManagement: {
    userNotFound: 'User not found',
    emailAlreadyExists: 'Email already exists',
    userCreated: 'User created successfully',
    userUpdated: 'User updated successfully',
    statusChanged: 'User status changed successfully',
    userDeleted: 'User deleted successfully',
    userBlocked: 'User blocked successfully',
    userUnblocked: 'User unblocked successfully',
    userActivated: 'User activated successfully',
    userDeactivated: 'User deactivated successfully',
  },

  userListManagement: {
    userNotFound: 'User not found',
    userBlocked: 'User blocked successfully',
    userUnblocked: 'User unblocked successfully',
    userActivated: 'User activated successfully',
    userDeactivated: 'User deactivated successfully',
    userDeleted: 'User deleted successfully',
  },

  roleManagement: {
    cannotDeleteRoleAssignedToUsers:
      'Cannot delete role assigned to active users.',
    disabledRole:
      'This role is currently deactivated. Please activate the role to assign it to users.',
  },
};
