import { Router } from 'express';
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { sample_users } from '../data';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const userCount = await UserModel.countDocuments();
        if (userCount > 0) {
            res.send("Seed already done!");
            return;
        } else {
            await UserModel.create(sample_users);
            res.send("Seed is done!");
        }
    }
))

router.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        
        if (user) {
            const encryptedPassword = user!.password;
            const isAuthorized = await bcrypt.compare(password, encryptedPassword);
            if (isAuthorized) {
                res.send(generateTokenResponse(user));
            }
            else {
                res.status(HTTP_BAD_REQUEST).send("Username or password invalid!");
            }
        } else {
            res.status(HTTP_BAD_REQUEST).send("Username or password invalid!");
        }
    }
))

router.post("/register", asyncHandler(
    async (req, res) => {
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            res.status(HTTP_BAD_REQUEST).send("User already exists with this email! Try again!");
            return;
        } else {
            const encryptedPassword = await bcrypt.hash(password, 10);
            const newUser: User = {
                id: '',
                name,
                email,
                password: encryptedPassword,
                address,
                isAdmin: false
            }
            const dbUser = await UserModel.create(newUser);
            res.send(generateTokenResponse(dbUser));
        }
    }
))

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }, "jwtsecret123", {
        expiresIn: "30d"
    });
    
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
}

export default router;