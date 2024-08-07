require("dotenv").config();

import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./controllers/auth/current-user";
import { signinRouter } from "./controllers/auth/signin";
import { signoutRouter } from "./controllers/auth/signout";
import { signupRouter } from "./controllers/auth/signup";

import { addProductRouter } from "./controllers/product/add";
import { applyPendingChangesRouter } from "./controllers/product/apply-pending-changes";
import { checkForUpdatesRouter } from "./controllers/product/check-for-update";
import { deleteProductRoute } from "./controllers/chat/delete";
import { getAllProductRouter } from "./controllers/product/get-all";
import { getProductRouter } from "./controllers/product/get";
import { updateProductRouter } from "./controllers/product/update";

import { fetchAllIkonkaProductsRouter } from "./controllers/ikonka/fetch-all-ikonka-products";
import { getAllIkonkaProductsRouter } from "./controllers/ikonka/get-products";
import { getIkonkaProductRouter } from "./controllers/ikonka/get-product";

import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

import { getCategoriesRouter } from "./controllers/category/get-categories";
import { applyCategoriesRouter } from "./controllers/category/apply-categories";

import { addTagRouter } from "./controllers/category/add-tag";
import { deleteTagRoute } from "./controllers/category/delete-tag";
import { getAllTagRouter } from "./controllers/category/get-all-tags";

import { ApolloServer, gql } from "apollo-server-express";
//import resolvers from "./graphql/resolvers";

const typeDefs = gql`
  ${require("fs").readFileSync(
    require.resolve("./graphql/schema.graphql"),
    "utf8"
  )}
`;

//const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
//server.applyMiddleware({ app });
const cors = require("cors");
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: true,
    // secure: process.env.NODE_ENV !== "test",
    // Cookie Options
    name: "session",
    keys: ["sdsdf", "sdsdf"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    //secure: true,
    //sameSite: "none",
  })
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3002",
      "http://backend:3002",
    ],
    credentials: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(addProductRouter);
app.use(applyPendingChangesRouter);
app.use(checkForUpdatesRouter);
app.use(deleteProductRoute);
app.use(getAllProductRouter);
app.use(getProductRouter);
app.use(updateProductRouter);

app.use(fetchAllIkonkaProductsRouter);
app.use(getAllIkonkaProductsRouter);
app.use(getIkonkaProductRouter);

app.use(applyCategoriesRouter);
app.use(getCategoriesRouter);

app.use(addTagRouter);
app.use(deleteTagRoute);
app.use(getAllTagRouter);

app.all("*", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
