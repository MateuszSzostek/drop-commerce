import { BASE_API_URL } from "../../../common/consts/index";
import { PaginatedItems, SelectOptions } from "../../../common/types";

/*
 *** Requests Types
 */

export type AddProductRequest = {};
export type AddProductResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type GetProductRequest = {
  id: string;
};
export type GetProductResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type DeleteProductRequest = {
  id: string;
};
export type DeleteProductResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type UpdateProductRequest = {
  id: string;
};
export type UpdateProductResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type GetProductsRequest = {};
export type GetProductsResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: { items: Product[] };
};

export type CheckForUpdatesRequest = {};
export type CheckForUpdatesResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type ApplyPendingChangesRequest = {};
export type ApplyPendingChangesResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
};

export type FetchAllIkonkaProductsRequest = {};

export type FetchAllIkonkaProductsResponse = {};

export type GetIkonkaProductsRequest = {
  page?: string;
  limit?: string;
  name?: string;
  providerProductId?: string;
  existsInProviderStore: boolean;
};

export type GetIkonkaProductsResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: PaginatedItems<IkonkaProduct>;
};

export type GetIkonkaProductRequest = {
  id: string;
};

export type GetIkonkaProductResponse = {
  status: "success" | "error";
  code: number;
  message: string;
  data: IkonkaProduct;
};

/*
 *** Fields Types
 */

export interface ProductsDataType {
  key: string;
  lp: number | string;
  id: string;
  provider: string;
  name: string;
  updates: boolean;
  priceChanged: boolean;
  categoryMissing: boolean;
}

export interface ProviderProductsDataType {
  key: string;
  id: string;
  providerId: string;
  name: string;
  alreadyInShop: boolean;
}

export interface FilterProductsFieldType {
  name: string;
  updates: boolean;
  priceChanged: boolean;
  categoryMissing: boolean;
}

export interface ProductFieldType {
  id: string;
  name: string;
  provider: Providers;
  nettPrice: string;
  providerNettoPrice: number;
  margin: string;
  vat: number;
  netProfit: number;
  suggesterDetailPrice: number;
  code: string;
  tooBigForParcelLocker: string | boolean;
  deliveryTime: string;
  nextDelivery: string;
  length: string;
  height: string;
  weight: string;
  amountInBox: number;
  state: number;
  linkToInstruction: string;
  linkToPictures: string;
  volume: string;
  categories: string[];
  tags: string[];
  pictures: string[];
}

export type IkonkaProduct = {
  _id: string;
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
};

/*
 *** Components Props Types
 */

/*
 *** Other Types & Interfaces
 */

export const sexSelectOptions: SelectOptions = [
  { value: "male", label: "Chlopiec" },
  { value: "female", label: "Dziewczynka" },
];

export enum Providers {
  IKONKA = "IKONKA",
}

export interface Product {
  id: string;
  name: string;
  provider: Providers;
  nettPrice: string;
  providerNettoPrice: number;
  margin: string;
  vat: number;
  netProfit: number;
  suggesterDetailPrice: number;
  code: string;
  tooBigForParcelLocker: boolean;
  deliveryTime: string;
  nextDelivery: string;
  length: string;
  height: string;
  weight: string;
  amountInBox: number;
  state: number;
  linkToInstruction: string;
  linkToPictures: string;
  volume: string;
  categories: string[];
  tags: string[];
  pictures: string[];
  pendingUpdates: string[];
  priceChanged: boolean;
  categoryMissing: boolean;
}

/*
 *** Field Types Keys
 */
export enum NEW_PRODUCT_INPUT_FIELDS {}

export enum FILTER_PRODUCTS_INPUT_FIELDS {
  name = "name",
  updates = "updates",
  priceChanged = "priceChanged",
  categoryMissing = "categoryMissing",
}

export enum FILTER_PROVIDER_PRODUCTS_INPUT_FIELDS {
  name = "name",
  providerProductId = "providerProductId",
  existInProviderStore = "existInProviderStore",
}

export enum PRODUCT_INPUT_FIELDS {
  id = "id",
  name = "name",
  provider = "provider",
  netPrice = "netPrice",
  grossPrice = "grossPrice",
  providerNettoPrice = "providerNettoPrice",
  margin = "margin",
  vat = "vat",
  netProfit = "netProfit",
  suggestedDetailPrice = "suggestedDetailPrice",
  shortDescription = "shortDescription",
  description = "description",
  providerIdentifier = "providerIdentifier",
  tooBigForParcelLocker = "tooBigForParcelLocker",
  deliveryTime = "deliveryTime",
  nextDelivery = " nextDelivery",
  length = "length",
  height = "height",
  weight = "weight",
  amountInBox = "amountInBox",
  state = "state",
  linkToInstruction = "linkToInstruction",
  linkToPictures = "linkToPictures",
  volume = "volume",
  categories = "categories",
  tags = "tags",
  pictures = "pictures",
}

export enum IKONKA_INPUT_FIELDS {
  kod_kreskowy = "kod_kreskowy",
  nazwa = "nazwa",
  dostawca = "dostawca",
  cena = "cena",
  grupa_rabatowa = "grupa_rabatowa",
  vat = "vat",
  sugerowana_cena_detaliczna = "sugerowana_cena_detaliczna",
  opis_krotki = "opis_krotki",
  opis = "opis",
  zdp = "zdp",
  czas_dostawy = "czas_dostawy",
  najblizsza_dostawa = "najblizsza_dostawa",
  dlugosc = "dlugosc",
  wysokosc = "wysokosc",
  waga = "waga",
  sztuk_w_kartonie = "sztuk_w_kartonie",
  stan = "stan",
  kod = "kod",
  link_do_instrukcji = "link_do_instrukcji",
  link_do_zdjec = "link_do_zdjec",
  kategoria = "kategoria",
  objetosc = "objetosc",
  zdjecia = "zdjecia",
}

export const PRODUCTS_TABLE_HEADERS = {
  lp: "lp",
  id: "id",
  name: "name",
  provider: "provider",
  updates: "updates",
  priceChanged: "price-changed",
  categoryMissing: "category-missing",
};

export const PROVIDER_PRODUCTS_TABLE_HEADERS = {
  id: "id",
  name: "name",
  providerId: "provider-id",
  actions: "provider-actions",
};

//////////////////////////////

export const BASE_PRODUCT_URL = `${BASE_API_URL}api/product/`;
export const BASE_IKONKA_URL = `${BASE_API_URL}api/ikonka/`;
