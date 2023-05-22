const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const StudentSchema = mongoose.Schema(
  {
    masv: { type: String, required: true, maxLength: 25 },
    tensv: { type: String, required: true, maxLength: 100 },
    lop: { type: String, required: true, maxLength: 50 },
    khoa: { type: String, required: true, maxLength: 100 },
    slug: { type: String, slug: 'tensv', unique: true },
    diachi: { type: String, required: true, maxLength: 100 },
    sodienthoai: { type: String, required: true, maxLength: 100 },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", StudentSchema);
