import { Router } from "express";
import { celebrate } from 'celebrate';
import {registerUser} from '../controllers/authController.js'
import { registerUserSchema } from "../validations/authValidations.js";

const authRoutes = Router();

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);

export default authRoutes;
