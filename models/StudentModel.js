const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Student Name'],
        trim: true,
        minLength:[4,'Please put the atlest 4 Character']
    },
    email_id: {
        type: String,
        required: [true,'Please Enter Student Email Id'],
        trim: true,
        lowercase: true,
        unique: [true, "email must be unique"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobile_no: {
        type: Number,
        required: [true, 'Please Enter Student Email Id'],
        maxLength: [10, "Mobile no exceed 10 Characters"]
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    CreateAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model("Student", studentSchema)