import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


export const getCurrentUser = async (req, res) => {
    try {
        let token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
        if (!token) return res.status(200).json(null);

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) return res.status(200).json(null);

        const user = await User.findById(verifyToken.userId);
        if (!user) {
            return res.status(200).json(null);
        }
        const userData = user.toObject ? user.toObject() : user;
        return res.status(200).json({ ...userData, token });

    } catch (error) {
        return res.status(200).json(null);
    }
};