import Contact from "../models/contact.js";

export const contact = async (req, res) => {
    try {
        const { name , email, message } = req.body;
        const newContact = new Contact({
            name,
            email,
            message
        });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};