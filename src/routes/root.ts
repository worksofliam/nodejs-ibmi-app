import express from "express";
import db from "../db";

const root = express.Router();

root.get('/', async (req, res) => {
  //let result = await db.callProcedure(null, 'LIBRARY', 'PROCEDURE', ["P", 4, "R", 4, "M", 3, "T", 3, "R", 2]);
  //let result = await db.query("SELECT * FROM TABLE WHERE COLUMN = ?", [1]);
  res.send('Hello world!');
});

export default root;