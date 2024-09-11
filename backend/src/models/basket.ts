import mongoose from "mongoose";
import { ParsedQs } from "qs";

interface BasketAttrs {
  ownerId: string;
  providerIdentifier: string;
  provider: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  productName: string;
  picture: string;
  deliveryCost: number;
}

interface BasketModel extends mongoose.Model<BasketDoc> {
  build(attrs: BasketAttrs): BasketDoc;
}

export interface BasketDoc extends mongoose.Document {
  ownerId: string;
  providerIdentifier: string;
  provider: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  productName: string;
  picture: string;
  deliveryCost: number;
}

const basketSchema = new mongoose.Schema(
  {
    ownerId: {
      type: String,
      required: true,
    },
    providerIdentifier: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    deliveryCost: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

basketSchema.statics.build = (attrs: BasketAttrs) => {
  return new Basket(attrs);
};

const Basket = mongoose.model<BasketDoc, BasketModel>("Basket", basketSchema);

export { Basket };
