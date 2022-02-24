const { getAllStudent, createStudent, UpdateStudent, studentDelete } = require('../controllers/studentControler')

const router = require('express').Router()

router.route('/student/new').post(createStudent)

router.route('/all/Student').get(getAllStudent)

router.route('/Student/:id').patch(UpdateStudent).delete(studentDelete)

module.exports = router

