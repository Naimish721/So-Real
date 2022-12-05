const Data = require("../models/upload.pic");
const nd = require("../models/upload.note");

exports.feeds = async (req, res) => {
  try {
    const datas = await Data.find();
    return res.render("home", {
      datas,
    });
    const notes = await nd.find();
    return res.render("home", {
      notes,
    });
  } catch (error) {
    console.log(error);
  }
};
