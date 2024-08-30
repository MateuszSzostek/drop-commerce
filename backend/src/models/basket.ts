import mongoose from "mongoose";
import { ParsedQs } from "qs";

interface BasketAttrs {
  ownerId: string;
  providerIdentifier: string;
  productId: string;
  providerProductId: string;
  quantity: number;
}

interface BasketModel extends mongoose.Model<BasketDoc> {
  build(attrs: BasketAttrs): BasketDoc;
}

export interface BasketDoc extends mongoose.Document {
  ownerId: string;
  providerIdentifier: string;
  productId: string;
  providerProductId: string;
  quantity: number;
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
    productId: {
      type: String,
      required: true,
    },
    providerProductId: {
      type: String,
      required: true,
    },
    quantity: {
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
