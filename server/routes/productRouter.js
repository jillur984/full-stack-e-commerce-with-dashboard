import express from "express"
import { getProduct } from "../controllers/productController.js";

const productRouter=express.Router();


productRouter.get("/allProducts",getProduct)

export default productRouter;