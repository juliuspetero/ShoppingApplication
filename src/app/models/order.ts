import { IProduct } from "./product";

// This is an object posted to the server
export interface IOrder {
  id: string;
  totalAmount: number;
  applicationMode: string;
  phone: string;
  email: string;
  orderProducts: IProduct[];
  deliveryAddress: string;
  deliveryStatus: string;
  placedOn: string;
  paymentStatus: string;
}
