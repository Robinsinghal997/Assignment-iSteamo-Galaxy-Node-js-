const Student = require("../models/StudentModel");
const ErrorHandler = require("../utils/errorHandling");
const catchError = require("../middleware/catchAssyncError");

// create Student

exports.createStudent = catchError(async (req, res, next) => {
    const student = await Student.create(req.body);
    res.status(201).json({
        success: true,
        student,
    });
});

// get all student

exports.getAllStudent = catchError(async (req, res) => {
    const AllStudent = await Student.find();
    res.status(200).json({
        success: 1,
        AllStudent,
    });
});

// update student
exports.UpdateStudent = catchError(async (req, res, next) => {
    let student = await Student.findById(req.params.id);

    if (!student) {
        return next(
            new ErrorHandler(`${req.params.id} This id Student not Found`, 404)
        );
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
});

// delete Student

exports.studentDelete = catchError(async (req, res, next) => {
    let student = await Student.findById(req.params.id);
    if (!student) {
        return next(
            new ErrorHandler(`${req.params.id} This id Student not Found`, 404)
        );
    }
    await student.remove();
    res.status(200).json({
        success: true,
        message: "Student is Deleted SuccessFully",
    });
});
