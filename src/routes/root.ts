import express from "express";
import db from "../db";

const root = express.Router();

root.get('/', async (req, res) => {
  //let result = await db.callProcedure(null, 'LIBRARY', 'PROCEDURE', ["P", 4, "R", 4, "M", 3, "T", 3, "R", 2]);
  //let result = await db.query("SELECT * FROM TABLE WHERE COLUMN = ?", [1]);
  res.send('Hello world!');
});

root.get('/test', async (req, res) => {
  let result = await db.query("SELECT * FROM SAMPLE.EMPLOYEE");

  res.json(result.data);
});

root.get('/people', async (req, res) => {
  let result = await db.query("call liama.people()");

  res.json(result.data);
});

root.get(`/sum`, async (req, res) => {
  const numa = Number(req.query.numa);
  const numb = Number(req.query.numb);

  // Currently broken in Mapepire
  let result = await db.query(`call liama.sumpgm(?, ?, ?)`, [numa, numb, 1]);

  res.json({
    result: result.output_parms
  })
});

export default root;