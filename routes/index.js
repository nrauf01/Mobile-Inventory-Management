const router = require("express").Router();
router.use("/author", require("./author.router"));

module.exports = router;
