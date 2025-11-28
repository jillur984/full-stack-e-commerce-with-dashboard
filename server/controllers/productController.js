import { v2 as cloudinary } from "cloudinary";
import productModel from "../model/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      _type,
      name,
      price,
      discountPercentage,
      category,
      brand,
      badge,
      isAvailable,
      offer,
      description,
      tags,
    } = req.body;

    console.log(req.files);

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

    if (!name || !price || !category || !description) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields: name, price, category, and description are mandatory.",
      });
    }

    // collect only that image have not undefined

    let images = [image1, image2].filter((item) => item !== undefined);

    //  console.log("Jillurimages",images)

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });

        return result.secure_url;
      })
    );
    // Parse tags or split if necessary (note-it is array of string bro)

    let parsedTags;
    try {
      parsedTags = JSON.parse(tags);
    } catch (err) {
      parsedTags = tags ? tags.split(",").map((tag) => tag.trim()) : [];
    }

    const productData = {
      _type: _type ? _type : "",
      name,
      price: Number(price),
      discountPercentage: discountPercentage ? Number(discountPercentage) : 10,
      category,
      brand: brand ? brand : "",
      badge: badge === "true" ? true : false,
      isAvailable: isAvailable === "true" ? true : false,
      offer: offer === "true" ? true : false,
      description,
      tags: tags ? parsedTags : [],
      images: imageUrl,
    };
    console.log("Product Data", productData);

    const product = new productModel(productData);
    product.save();

    return res.json({
      success: true,
      message: `${name} added and save to DB successfully`,
    });
  } catch (error) {
    console.log("Failed to Add Product", error);
    return res.json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  const {_id} = req.body;

  try {
    await productModel.findByIdAndDelete(_id);
    return res.json({
      success: true,
      message: "Product Deleted Succesfully",
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const listProduct = async (req, res) => {
  try {
    const total = await productModel.countDocuments({});
    const products = await productModel.find({});

    if (products.length) {
      return res.json({
        success: true,
        message: "Product List Get Succesfully",
        total,
        products,
      });
    } else {
      return res.json({
        success: false,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    console.log("ID from FE", _id);
    const singleProduct = await productModel.findById(_id);

    if (singleProduct.length) {
      return res.json({
        success: true,
        message: "Single Product Get Succesfully",
        singleProduct,
      });
    } else {
      return res.json({
        success: false,
        message: "Product Not Found",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addProduct, removeProduct, listProduct, singleProduct };
