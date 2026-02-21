import { UserSubscriptionStatus } from './user-status.constant';

export enum NotificationType {
  INAPP = 'inapp',
  EMAIL = 'email',
}
export enum NotificationStatus {
  PENDING = 'PENDING',
  SCHEDULED = 'SCHEDULED',
  SENT = 'SENT',
  FAILED = 'FAILED',
}

export enum UserNotificationType {
  PaymentSuccess = 'PAYMENT_SUCCESS',
  PaymentFailure = 'PAYMENT_FAILURE',
  SubscriptionRenewalReminder = 'SUBSCRIPTION_RENEWAL_REMINDER',
  NewFeatureAnnouncement = 'NEW_FEATURE_ANNOUNCEMENT',
  GeneralUpdate = 'GENERAL_UPDATE',
}
export const NotificationSchedule = {
  scheduledNotification: 'scheduled_notification',
};

export enum NotificationTargetAudience {
  ALL = 'ALL',
  PREMIUM = UserSubscriptionStatus.PREMIUM,
  FREE = UserSubscriptionStatus.FREE,
  PRO = UserSubscriptionStatus.PRO,
}
