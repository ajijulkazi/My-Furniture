import Booking from "../models/Booking.js";

// Create Booking
export const booking = async (req, res) => {
    try {
        const { name , email, phone, address, date } = req.body;
        const newBooking = new Booking({
            name,
            email,
            phone,
            address,
            date,
        });
        const savedBook = await newBooking.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

