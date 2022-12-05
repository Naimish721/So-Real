const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//controllers
const authController = require("../controllers/auth.controller");
const mediaController = require("../controllers/media.controller");
const feedsController = require("../controllers/feeds.controller");
const noteController = require("../controllers/note.controller");

router.get("/", feedsController.feeds);

router.get("/post", (req, res) => {
  res.render("post");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/register", authController.ShowRegisterPage);
router.post("/register", authController.ValidateRegister);

router.get("/uploadimgr", mediaController.UploadPicPage);

router.post("/home", upload.single("avatar"), mediaController.UploadImg);
router.get("/fetch", mediaController.Fetch);

// router.get("/uploadnote", noteController.UploadNotePage);
// router.post("/home", noteController.UploadNote);

module.exports = router;
