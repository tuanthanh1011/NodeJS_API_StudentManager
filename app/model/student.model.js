const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    masv: { type: String, required: true, maxLength: 25 },
    tensv: { type: String, required: true, maxLength: 100 },
    lop: { type: String, required: true, maxLength: 50 },
    khoa: { type: String, required: true, maxLength: 100 },
    slug: { type: String, slug: 'tensv' },
    diachi: { type: String, required: true, maxLength: 100 },
    sodienthoai: { type: String, required: true, maxLength: 100 },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", StudentSchema);
