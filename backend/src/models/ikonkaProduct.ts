import mongoose from "mongoose";
import { ParsedQs } from "qs";

export interface IkonkaProductAttrs {
  kod: string;
  kod_kreskowy: string;
  stan: string;
  vat: number;
  cena: string;
  nazwa: string;
  kategoria: string;
  opis: string;
  opis_krotki: string;
  zdjecia: string[];
  czas_dostawy: string;
  sztuk_w_kartonie: string;
  najblizsza_dostawa: string;
  objetosc: string;
  waga: string;
  zdp: string;
  alreadyInShop: boolean;
}

interface IkonkaProductModel extends mongoose.Model<IkonkaProductDoc> {
  build(attrs: IkonkaProductAttrs): IkonkaProductDoc;
}

export interface IkonkaProductDoc extends mongoose.Document {
  kod: string;
  kod_kreskowy: string;
  stan: string;
  vat: number;
  cena: string;
  nazwa: string;
  kategoria: string;
  opis: string;
  opis_krotki: string;
  zdjecia: string[];
  czas_dostawy: string;
  sztuk_w_kartonie: string;
  najblizsza_dostawa: string;
  objetosc: string;
  waga: string;
  zdp: string;
  alreadyInShop: boolean;
}

const ikonkaProductSchema = new mongoose.Schema(
  {
    //kod -> is an identifier of product from Ikonka wholesale
    kod: {
      type: String,
      required: true,
    },
    kod_kreskowy: {
      type: String,
      required: false,
    },
    stan: {
      type: String,
      required: true,
    },
    vat: {
      type: String,
      required: false,
    },
    cena: {
      type: String,
      required: true,
    },
    nazwa: {
      type: String,
      required: true,
    },
    kategoria: {
      type: String,
      required: false,
    },
    opis: {
      type: String,
      required: false,
    },
    opis_krotki: {
      type: String,
      required: false,
    },
    zdjecia: {
      type: Array<String>,
      required: false,
    },
    czas_dostawy: {
      type: String,
      required: false,
    },
    sztuk_w_kartonie: {
      type: String,
      required: false,
    },
    najblizsza_dostawa: {
      type: String,
      required: false,
    },
    objetosc: {
      type: String,
      required: false,
    },
    waga: {
      type: String,
      required: false,
    },
    zdp: {
      type: String,
      required: false,
    },
    alreadyInShop: {
      type: Boolean,
      required: false,
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

ikonkaProductSchema.statics.build = (attrs: IkonkaProductAttrs) => {
  return new IkonkaProduct(attrs);
};

const IkonkaProduct = mongoose.model<IkonkaProductDoc, IkonkaProductModel>(
  "IkonkaProduct",
  ikonkaProductSchema
);

export interface IkonkaProductQuery extends ParsedQs {
  page?: string;
  limit?: string;
  name?: string;
  providerProductId?: string;
}

export { IkonkaProduct };
