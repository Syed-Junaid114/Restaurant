import mongo from 'mongoose';
import validator from 'validator'

const reservationSchema = new mongo.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    phone: {
        type: Number,
        required: true,
        minLength: [10, 'Please enter 10digits Number'],
        maxLength: [12, 'Number cannot exceed 12digit']
    },
    time: { type: String, required: true },
    date: { type: String, required: true }
})

export const reservation = mongo.model('reservation', reservationSchema);