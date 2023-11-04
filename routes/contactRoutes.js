const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contacController");

router.route("/").get(getContact);

router.route("/").post();

router.route("/id").post();

router.route("/:id").put();

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;
