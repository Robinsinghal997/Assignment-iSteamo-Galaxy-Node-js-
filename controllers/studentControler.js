const Student = require("../models/StudentModel");

// create Student

exports.createStudent = async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    success: true,
    student,
  });
};

exports.getAllStudent = async (req, res) => {
  const AllStudent = await Student.find();
  res.status(200).json({
    success: 1,
    AllStudent,
  });
};
exports.UpdateStudent = async (req, res) => {
  let student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(500).json({
      success: false,
      message: `${req.params.id} This id Student not Found `,
    });
  }
  student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    student,
  });
};
