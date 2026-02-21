export enum SystemActivityLogStatus {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export const SystemActivityLogActions = {
  UserLogin: 'UserLogin',
  UserLogout: 'UserLogout',
  PasswordChanged: 'PasswordChanged',
  ProfileUpdated: 'ProfileUpdated',
  FailedLoginAttempt: 'FailedLoginAttempt',
  UserBlocked: 'UserBlocked',
  UserUnblocked: 'UserUnblocked',
  UserDeactivated: 'UserDeactivated',
  UserActivated: 'UserActivated',
  UserDeleted: 'UserDeleted',
  AdminBlocked: 'AdminBlocked',
  AdminUnblocked: 'AdminUnblocked',
  AdminDeactivated: 'AdminDeactivated',
  AdminActivated: 'AdminActivated',
  AdminDeleted: 'AdminDeleted',
  NotificationCreated: 'NotificationCreated',
  NotificationScheduled: 'NotificationScheduled',
  NotificationFailed: 'NotificationFailed',
  NewUserRegistered: 'NewUserRegistered',
  OAuthLogin: 'OAuthLogin',
  PermissionUpdated: 'PermissionUpdated',
  RoleCreated: 'RoleCreated',
  RoleUpdated: 'RoleUpdated',
  RoleDeleted: 'RoleDeleted',
  RoleDeactivated: 'RoleDeactivated',
  AdminCreated: 'AdminCreated',
  AdminUpdated: 'AdminUpdated',
};

export const SystemActivityLogDescriptions = {
  SuccessfulLogin: (browserName: string) =>
    `Successful login from ${browserName} browser.`,
  SuccessfulLogout: (browserName: string, userName?: string) =>
    `${userName ? `User ${userName} successfully` : 'Successful'} logout from ${browserName} browser.`,
  InvalidCredentialsWithAttempts: (attempts: number) =>
    `Invalid credentials - ${attempts} Failed attempts.`,
  AccountBlocked: (userId: string) =>
    `User account has been blocked for user ID: ${userId}.`,
  ProfileUpdated: ` User has updated their profile information.`,
  PasswordChanged: 'Changed password and updated profile information.',
  UserRegistered: (userId: string) => `New user registered with ID: ${userId}.`,
  OAuthLogin: (provider: string, userName: string) =>
    `User ${userName} logged in via ${provider}.`,
  OAuthRegistration: (provider: string, userName: string) =>
    `New user ${userName} registered via ${provider}.`,
  NotificationCreated: 'Notification has been created.',
  NotificationScheduled: 'Notification has been scheduled for delivery.',
  NotificationFailed: 'Notification delivery has failed.',
  NotificationFailedWithErrorMessage: (errorMessage: string) =>
    `Notification delivery has failed. Error: ${errorMessage}`,

  PermissionUpdatedForRole: (roleDisplayName: string) =>
    `Permissions updated for role: ${roleDisplayName}.`,
  RoleCreated: (roleDisplayName: string) =>
    `New role created with name: ${roleDisplayName}.`,
  RoleUpdated: (roleDisplayName: string) =>
    `Role updated with name: ${roleDisplayName}.`,
  RoleDeleted: (roleDisplayName: string) =>
    `Role deleted with name: ${roleDisplayName}.`,
  RoleDeactivated: (roleDisplayName: string) =>
    `Role deactivated with name: ${roleDisplayName}.`,

  UserBlockedByAdmin: (userId: string, adminName: string) =>
    `User with ID: ${userId} has been blocked by admin: ${adminName}.`,
  UserUnblockedByAdmin: (userId: string, adminName: string) =>
    `User with ID: ${userId} has been unblocked by admin: ${adminName}.`,
  UserDeactivatedByAdmin: (userId: string, adminName: string) =>
    `User with ID: ${userId} has been deactivated by admin: ${adminName}.`,
  UserActivatedByAdmin: (userId: string, adminName: string) =>
    `User with ID: ${userId} has been activated by admin: ${adminName}.`,
  UserDeletedByAdmin: (userId: string, adminName: string) =>
    `User with ID: ${userId} has been deleted by admin: ${adminName}.`,

  AdminBlockedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been blocked by admin: ${adminName}.`,
  AdminUnblockedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been unblocked by admin: ${adminName}.`,
  AdminDeactivatedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been deactivated by admin: ${adminName}.`,
  AdminActivatedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been activated by admin: ${adminName}.`,
  AdminDeletedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been deleted by admin: ${adminName}.`,

  AdminCreatedByAdmin: (userId: string, adminName: string) =>
    `New admin with ID: ${userId} has been created by admin: ${adminName}.`,
  AdminUpdatedByAdmin: (userId: string, adminName: string) =>
    `Admin with ID: ${userId} has been updated by admin: ${adminName}.`,
};
