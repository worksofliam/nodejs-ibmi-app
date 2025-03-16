import express from "express";
import { json } from "body-parser";

import { DatabaseServer, Db } from "./db";
import root from "./routes/root";

declare global {
  namespace Express {
    interface Request {
      db: Db;
    }
  }
}

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

const database = new Db();

database.connect(DatabaseServer).then(() => {
  app.use((req, res, next) => {
    req.db = database;
    next();
  });
  
  app.use(root);
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
});