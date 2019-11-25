import { IProduct } from "./product";

// This is an object posted to the server
export interface IOrder {
  id: string;
  totalAmount: number;
  applicationMode: string;
  phone: string;
  email: string;
  // This is retrieved from the cart
  oderProducts: IProduct[];
  deliveryAddress: string;
  deliveryStatus?: string;
  placedOn?: string;
  paymentStatus?: string;
}
