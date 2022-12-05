const Uploadn = require("../models/upload.note");

exports.UploadNotePage = (req, res) => {
  return res.render("uploadnote");
};

exports.UploadNote = async (req, res) => {
  const { name, note } = req.body;
  try {
    let noteObject = {
      name,
      note,
    };
    await Uploadn.create(noteObject);
    console.log(`success`);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.nfetch = async (req, res) => {
  const notes = await Uploadn.find();
  res.render("uploadnote", {
    notes,
  });
};
