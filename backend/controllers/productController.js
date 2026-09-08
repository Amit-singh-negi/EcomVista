import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// =================== ADD PRODUCT ===================
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    console.log("BODY RECEIVED:", req.body); // 👈 confirms request even reached here
    console.log("FILES RECEIVED:", req.files); // 👈 confirms multer parsed files

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    console.log("CLOUDINARY CONFIG:", cloudinary.config()); // 👈 confirms creds at upload time

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          folder: "products",
          overwrite: true,
        });
        return result.secure_url;
      })
    );

    console.log("IMAGES UPLOADED:", imagesUrl);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product Added Successfully",
    });
  } catch (error) {
    console.log("ADD PRODUCT ERROR:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};
// =================== LIST PRODUCTS ===================
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// =================== REMOVE PRODUCT ===================
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Product Removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// =================== SINGLE PRODUCT ===================
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  addProduct,
  listProduct,
  removeProduct,
  singleProduct,
};