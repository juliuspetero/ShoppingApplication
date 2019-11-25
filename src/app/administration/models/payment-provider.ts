export interface IPaymentProvider {
  paymentItemId: string;
  name: string;
  category: string;
  paymentRegex: string;
  paymentRegexStart: string;
  paymentId: string;
  isDeleted: boolean;
  isActive: boolean;
  longDescription: string;
  shortDescription: string;
  imageUri: string;
}
