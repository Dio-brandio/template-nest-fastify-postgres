export interface ICreateRazorpayOrder {
  amount: number;
  currency: string;
  receipt: string;
  bookingId: string;
  userId: string;
}

export interface IRazorpayPaymentCapture {
  id: string;
  amount: number;
  currency: string;
  status: string;
  order_id: string;
  international: boolean;
  method: string;
  description: string;
  error_code: any;
  error_description: any;
  error_source: any;
  error_step: any;
  error_reason: any;
  base_amount: number;
}

export interface ICreateRazorpayOrderResponse {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: any[];
  offer_id?: string;
  receipt?: string;
  status: string;
}

export interface ICreateBundleRazorpayOrder {
  bookingIds: string[];
  bundleId: string;
  userId: string;
}

export interface CreateRazorpayContactDTO {
  name: string;
  email: string;
  contact: string;
  type: 'employee' | 'vendor' | 'customer'; // Assuming fixed types
  reference_id?: string;
  notes?: Record<string, string>;
}

export interface CreateFundAccountDTO {
  contact_id: string;
  account_type: 'bank_account';
  bank_account: {
    name: string;
    ifsc: string;
    account_number: string;
  };
}

export interface CreatePayoutDTO {
  account_number: string;
  fund_account_id: string;
  amount: number; // Amount in paise (e.g., ₹500 = 50000)
  currency: 'INR';
  mode: 'NEFT' | 'RTGS' | 'IMPS' | 'UPI';
  purpose: string;
  queue_if_low_balance: boolean;
  reference_id?: string;
  narration?: string;
}
