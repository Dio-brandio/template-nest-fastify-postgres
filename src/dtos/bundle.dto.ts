export interface BundleBookingDTO {
  bundleId: string;
  bookingId: string[];
  date: Date;
  bundleBookingId?: string;
  sessionType?: string;
  therapistId?: string;
  userId: string;
}
