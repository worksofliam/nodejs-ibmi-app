import express from "express";
import { json } from "body-parser";

import db, { DatabaseServer } from "./db";
import root from "./routes/root";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use(root);

db.connect(DatabaseServer).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
});