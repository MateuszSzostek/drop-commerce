import mongoose from "mongoose";
import { IkonkaProductAttrs } from "./ikonkaProduct";

interface ProductAttrs {
  providerIdentifier: string;
  name: string;
  provider: string;
  price: string;
  providerPrice: string;
  margin: string;
  vat: string;
  netProfit: string;
  suggestedDetailPrice: string;
  shortDescription: string;
  description: string;
  tooBigForParcelLocker: boolean;
  deliveryTime: string;
  nextDelivery: string;
  lenght: string;
  weight: string;
  height: string;
  amountInBox: string;
  state: "ACTIVE" | "DISABLED";
  code: string;
  linkToInstruction: string;
  categories: string[];
  volume: string;
  pictures: string[];
  pendingUpdates: {};
  lastUpdateProviderProductSnapshot: IkonkaProductAttrs;
  mirrorProductIds: string[];
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttrs): ProductDoc;
}

export interface ProductDoc extends mongoose.Document {
  providerIdentifier: string;
  name: string;
  provider: string;
  price: string;
  providerPrice: string;
  margin: string;
  vat: string;
  netProfit: string;
  suggestedDetailPrice: string;
  shortDescription: string;
  description: string;
  tooBigForParcelLocker: boolean;
  deliveryTime: string;
  nextDelivery: string;
  lenght: string;
  weight: string;
  height: string;
  amountInBox: string;
  state: "ACTIVE" | "DISABLED";
  code: string;
  linkToInstruction: string;
  categories: string[];
  volume: string;
  pictures: string[];
  pendingUpdates: {};
  lastUpdateProviderProductSnapshot: IkonkaProductAttrs;
  mirrorProductIds: string[];
}

const productSchema = new mongoose.Schema(
  {
    providerIdentifier: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    providerPrice: {
      type: String,
      required: true,
    },
    margin: {
      type: String,
      required: true,
    },
    vat: {
      type: String,
      required: true,
    },
    netProfit: {
      type: String,
      required: true,
    },
    suggestedDetailPrice: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tooBigForParcelLocker: {
      type: Boolean,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true,
    },
    nextDelivery: {
      type: String,
      required: true,
    },
    lenght: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    amountInBox: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    linkToInstruction: {
      type: String,
      required: true,
    },
    categories: {
      type: Array<String>,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    pictures: {
      type: Array<String>,
      required: true,
    },
    pendingUpdates: {
      type: String,
      required: true,
    },
    lastUpdateProviderProductSnapshot: {
      type: String,
      required: true,
    },
    mirrorProductIds: {
      type: Array<String>,
      required: true,
    },
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

productSchema.statics.build = (attrs: ProductAttrs) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productSchema
);

export { Product };
