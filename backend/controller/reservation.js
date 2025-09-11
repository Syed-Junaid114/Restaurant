import { reservation } from '../models/reservationSchema.js';
import errorHandler from '../middleware/errorHandler.js'

const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (firstName || lastName || email || phone || time || date) {
        next(new errorHandler("Please fill in all the fields", 400))
    }
    try {
        await reservation.create(firstName, lastName, email, phone, time, date);
        res.status(200).json({
            success: true,
            message: 'Reservation Sent Successfully'
        })
    }
    catch (err) {
        res.status(400)
            .json({ message: 'Error in Reservation' })
    }
    return next(err)
}

export default sendReservation;