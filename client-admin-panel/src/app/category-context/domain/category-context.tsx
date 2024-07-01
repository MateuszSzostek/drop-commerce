import { BASE_API_URL } from "../../../common/consts/index"
import { PaginatedItems, SelectOptions } from "../../../common/types"

/*
 *** Requests Types
 */

export type ApplyCategoriesRequest = {
  categoriesTreeObj: string
  categoriesList: string[]
}
export type ApplyCategoriesResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {
    categoriesTreeObj: string
    categoriesList: string[]
  }
}

export type GetCategoriesRequest = {}
export type GetCategoriesResponse = {
  status: "success" | "error"
  code: number
  message: string
  data: {
    categoriesTreeObj: string
    categoriesList: string[]
  }
}

/*
 *** Fields Types
 */

export type AddCategoryFormFieldType = {
  categoryName: string
}

/*
 *** Components Props Types
 */

export interface ICategoryNode {
  name: string
  id: string
  nodes?: ICategoryNode[]
  handleAddCategory?: () => void
  handleAppendNode?: (parentCategoryId: string, newCategoryName: string) => void
}

export type CategoriesTree = {
  nodes?: ICategoryNode[]
}

export type AddCategoryNodeModalProps = {
  isOpen: boolean
  handleAppendNode: (newCategoryName: string) => void
}

/*
 *** Other Types & Interfaces
 */

export const sexSelectOptions: SelectOptions = [
  { value: "male", label: "Chlopiec" },
  { value: "female", label: "Dziewczynka" },
]

export enum Providers {
  IKONKA = "IKONKA",
}

export interface Product {
  id: string
  name: string
  provider: Providers
  nettPrice: string
  providerNettoPrice: number
  margin: string
  vat: number
  netProfit: number
  suggesterDetailPrice: number
  code: string
  tooBigForAParcelLocker: boolean
  deliveryTime: string
  nextDelivery: string
  length: string
  height: string
  weight: string
  amountInBox: number
  state: number
  linkToInstruction: string
  linkToPictures: string
  volume: string
  categories: string[]
  tags: string[]
  pictures: string[]
  updates: boolean
  priceChanged: boolean
  categoryMissing: boolean
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
}

export enum CATEGORY_INPUT_FIELDS {
  categoryName = "categoryName",
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
}

export const PROVIDER_PRODUCTS_TABLE_HEADERS = {
  id: "id",
  name: "name",
  providerId: "providerId",
  actions: "actions",
}

//////////////////////////////

export const BASE_CATEGORY_URL = `${BASE_API_URL}api/category/`
