import express from "express";

const root = express.Router();

root.get('/', (req, res) => {
  res.send('Hello world!');
});

export default root;