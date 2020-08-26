const repo = require("../db/pageRepository");
const auth = require("../middleware/auth");

const validateUser = require("../validators/userValidator");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const pages = await repo.getAllPages();
  console.log(pages);

  res.json(pages);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const page = await repo.getPageById(id);
  console.log(page);
  res.json(page);
});

router.post("/", async (req, res) => {
  // validate the request body first
  //console.log(req.body);
  //const { error } = validateUser(req.body);
  //if (error) return res.status(400).send(error.details[0].message);

  //find an existing user

  const newPage = await repo.createNewPage(req.body);
  res.send(newPage);
});

module.exports = router;
