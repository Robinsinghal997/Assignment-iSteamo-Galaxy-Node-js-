const { getAllStudent, createStudent, UpdateStudent } = require('../controllers/studentControler')

const router = require('express').Router()

// router.route('/allStudent').get(getAllStudent)

router.route('/student/new').post(createStudent)

router.route('/all/Student').get(getAllStudent)

router.route('/Student/:id').patch(UpdateStudent)

module.exports = router

