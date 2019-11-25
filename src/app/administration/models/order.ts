import { IProduct } from "src/app/models/product";

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
  userId: string;
}
