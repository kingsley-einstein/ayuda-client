export interface PaymentModel {
  _id: string;
  amount: number;
  dueDate: Date;
  paid: boolean;
  reference: string;
}

export interface PaymentState {
  payment: PaymentModel;
  error?: any;
}

export const initialPaymentState: PaymentState = {
  payment: null,
  error: null
};
