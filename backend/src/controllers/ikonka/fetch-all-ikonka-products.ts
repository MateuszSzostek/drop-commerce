import express, { Request, Response } from "express";
import { Product, ProductDoc } from "../../models/product";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";
import { IkonkaProduct, IkonkaProductDoc } from "../../models/ikonkaProduct";
const request = require("request");

const router = express.Router();

router.get(
  "/api/ikonka/fetch-all-ikonka-products",
  requireAuth,
  async (req: Request, res: Response) => {
    try {
      await request(
        "https://api.ikonka.eu/50367a1e0d42fa8ab0ec563d60a091da5258e48f.json?variant=1&lang=pl&currency=PLN",
        async function (error: any, response: any, body: string) {
          if (!error && response.statusCode == 200) {
            const formatedJson: IkonkaProductDoc[] = JSON.parse(body);
            formatedJson.forEach(async (ikonkaProduct) => {
              const existingIkonkaProduct = await IkonkaProduct.findOne({
                kod: ikonkaProduct.kod,
              });

              if (!existingIkonkaProduct) {
                const newIkonkaProduct = IkonkaProduct.build({
                  kod: ikonkaProduct?.kod || "",
                  kod_kreskowy: ikonkaProduct?.kod_kreskowy || "",
                  stan: ikonkaProduct?.stan || "",
                  vat: ikonkaProduct?.vat || 23,
                  cena: ikonkaProduct?.cena || "",
                  nazwa: ikonkaProduct?.nazwa || "",
                  kategoria: ikonkaProduct?.kategoria || "",
                  opis: ikonkaProduct?.opis || "",
                  opis_krotki: ikonkaProduct?.opis_krotki,
                  zdjecia: ikonkaProduct?.zdjecia || [""],
                  czas_dostawy: ikonkaProduct?.czas_dostawy || "",
                  sztuk_w_kartonie: ikonkaProduct?.sztuk_w_kartonie || "",
                  najblizsza_dostawa: ikonkaProduct?.najblizsza_dostawa || "",
                  objetosc: ikonkaProduct?.objetosc || "",
                  waga: ikonkaProduct?.waga || "",
                  zdp: ikonkaProduct?.zdp || "",
                  alreadyInShop: false,
                });

                await newIkonkaProduct.save();
              } else {
                existingIkonkaProduct.update({
                  kod: ikonkaProduct?.kod || "",
                  kod_kreskowy: ikonkaProduct?.kod_kreskowy || "",
                  stan: ikonkaProduct?.stan || "",
                  vat: ikonkaProduct?.vat || 23,
                  cena: ikonkaProduct?.cena || "",
                  nazwa: ikonkaProduct?.nazwa || "",
                  kategoria: ikonkaProduct?.kategoria || "",
                  opis: ikonkaProduct?.opis || "",
                  opis_krotki: ikonkaProduct?.opis_krotki,
                  zdjecia: ikonkaProduct?.zdjecia || [""],
                  czas_dostawy: ikonkaProduct?.czas_dostawy || "",
                  sztuk_w_kartonie: ikonkaProduct?.sztuk_w_kartonie || "",
                  najblizsza_dostawa: ikonkaProduct?.najblizsza_dostawa || "",
                  objetosc: ikonkaProduct?.objetosc || "",
                  waga: ikonkaProduct?.waga || "",
                  zdp: ikonkaProduct?.zdp || "",
                });

                await existingIkonkaProduct.save();
              }
            });
          }

          console.log("All ikonka products fetched!");

          const respo: ResponseType<{}> = {
            status: "success",
            code: 200,
            message: "Ikonka products fetched successfully",
            data: {},
          };

          res.status(200).send(respo);
        }
      );
    } catch (e) {
      console.log(e);
      const response: ResponseType<{}> = {
        status: "error",
        code: 400,
        message: "Ikonka products ahs not been fetched",
        data: {},
      };

      res.status(400).send(response);
    }
  }
);

export { router as fetchAllIkonkaProductsRouter };
