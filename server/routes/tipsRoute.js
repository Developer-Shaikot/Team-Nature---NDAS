const router = require("express").Router();
const {
  getTips,
  addTips,
  deleteTipController,
} = require("../controllers/tipsController");
// const { addClass, getClasses } = require("../controllers/tipsController");
const { verifyToken } = require("../middlewares/jwtMiddleware");
const upload = require("../middlewares/upload");
router.get("/", getTips);
router.post("/add", upload.single("topicAvatar"), addTips);
router.delete("/delete/:tipId", deleteTipController);

module.exports = router;
