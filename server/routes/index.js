const router = require("express").Router();
const authRoutes = require("./auth");

const suggestionRoutes = require("./suggestion.routes")

router.use("/auth", authRoutes);

router.use("/suggestions", suggestionRoutes);



/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
