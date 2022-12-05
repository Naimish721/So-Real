const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  uploadTime: {
    type: Date,
    default: Date.now(),
  },
});

const UploadNote = mongoose.model("upload.note", uploadSchema);
module.exports = UploadNote;
