import mongoose from "mongoose";
import { IkonkaProductAttrs } from "./ikonkaProduct";
import { ParsedQs } from "qs";

interface ProductAttrs {
  providerIdentifier: string;
  name: string;
  provider: string;
  netPrice: string;
  providerNettoPrice: string;
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
  tags: string[];
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
  netPrice: string;
  providerNettoPrice: string;
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
  tags: string[];
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
    netPrice: {
      type: String,
      required: true,
    },
    providerNettoPrice: {
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
      required: false,
    },
    lenght: {
      type: String,
      required: false,
    },
    weight: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    amountInBox: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: false,
    },
    linkToInstruction: {
      type: String,
      required: false,
    },
    categories: {
      type: String,
      required: true,
    },
    tags: {
      type: Array<String>,
      required: true,
    },
    volume: {
      type: String,
      required: false,
    },
    pictures: {
      type: Array<String>,
      required: true,
    },
    pendingUpdates: {
      type: Array<String>,
      required: false,
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

export interface ProductQuery extends ParsedQs {
  page?: string;
  limit?: string;
  name?: string;
  categories?: string;
  tag?: string;
}

const Product = mongoose.model<ProductDoc, ProductModel>(
  "Product",
  productSchema
);

export { Product };
