const { checkLogin } = require("../handle/login");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body.body);
  const danhsach = await checkLogin(req.body.body);
  if (danhsach.length) {
    jwt.sign({ user: danhsach[0] }, "secretkey", (err, token) => {
      danhsach[0].token = token;
      res.cookie("token", token);
      console.log(danhsach[0]);
      res.json(danhsach[0]);
    });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
