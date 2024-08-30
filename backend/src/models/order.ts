import mongoose from "mongoose";

interface OrderAttrs {
  ownerId: string;
  ownerName: string;
  ownerSurname: string;
  statusTags: string[];
  basket: OrderBasket;
}

export type OrderBasket = {
  providerId: string;
  products: {
    id: string;
    name: string;
    amount: number;
    shortDescription: string;
    price: string;
    totalNettoPrice: string;
    totalBruttoPrice: string;
    thubnail: string;
  }[];
}[];

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

export interface OrderDoc extends mongoose.Document {
  ownerId: string;
  ownerName: string;
  ownerSurname: string;
  statusTags: string[];
  basket: OrderBasket;
}

const orderSchema = new mongoose.Schema(
  {
    ownerId: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerSurname: { type: String, required: true },
    statusTags: { type: [String], required: true },
    basket: [
      {
        providerId: { type: String, required: true },
        products: [
          {
            id: { type: String, required: true },
            name: { type: String, required: true },
            amount: { type: Number, required: true },
            shortDescription: { type: String, required: true },
            price: { type: String, required: true },
            totalNettoPrice: { type: String, required: true },
            totalBruttoPrice: { type: String, required: true },
            thumbnail: { type: String, required: true },
          },
        ],
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export { Order };
