import express from "express";
import { userLogin, userSignup } from "../controller/user-controller.js";
import {
  getProducts,
  getProuctById,
} from "../controller/product-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProuctById);

export default router;
