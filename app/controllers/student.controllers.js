const Student = require("../model/student.model");


exports.create = (req, res) => {
  const student = new Student({
    masv: req.body.masv,
    tensv: req.body.tensv,
    lop: req.body.lop,
    khoa: req.body.khoa,
    diachi: req.body.diachi,
    sodienthoai: req.body.sodienthoai,
  });

  student
    .save()
    .then(data => {
      res.send(data);
      console.log(" Data Inserted Sucessfully");
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong"
      });
    });
};

exports.findAll = (req, res) => {
  Student.find()
    .then(data => {
      console.log(" List of all student view sucessfully ");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "something went wrong"
      });
    });
};

exports.findOne = (req, res) => {
  Student.findOne(req.params.slug)
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: "No data found with " + req.params.slug
        });
      }
      console.log(" Student recored find by ID");
      res.send(data);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "No recored found with " + req.params.slug
        });
      }
      return res.status(500).send({
        message: "Error to retrieving student data " + req.params.slug
      });
    });
};

exports.update = (req, res) => {
  Student.findByIdAndUpdate(
    req.params.studentId,
    {
      masv: req.body.masv,
      tensv: req.body.tensv,
      lop: req.body.lop,
      khoa: req.body.khoa,
      diachi: req.body.diachi,
      sodienthoai: req.body.sodienthoai,
    },
    { new: true }
  )
    .then(data => {
      if (!data) {
        return res.status(500).send({
          message: "Error to update data" + req.params.studentId
        });
      }
      console.log(" Student Data update sucessfully");
      return res.send(data);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Error to update with obj " + req.params.studentId
        });
      }

      return res.status(500).send({
        message: "Error to get update data wiht " + req.params.studentId
      });
    });
};

exports.delete = (req, res) => {
  Student.findByIdAndRemove(req.params.studentId)
    .then(data => {
      if (!data) {
        return res
          .status(404)
          .send("Error to delete data " + req.params.studentId);
      }
      console.log(" Student data deleted Sucessfully");
      return res.send({ message: "Student data deleted sucessfully " });
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Error to deleteing data wiht Id " + req.params.studentId
        });
      }
      return res.status(500).send({
        message: "Error to deleting data with id" + req.params.studentId
      });
    });
};
