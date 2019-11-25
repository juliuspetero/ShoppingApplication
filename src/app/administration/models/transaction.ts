export interface ITransaction {
  id: string;
  userId: string;
  requestId: string;
  createdOn: string;
  status: string;
  batchId: string;
  amount: number;
  paymentProvider: string;
  message: string;
  userEmail: string;
  orderId: string;
}
