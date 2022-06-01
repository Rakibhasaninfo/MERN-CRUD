const express = require('express');
const ProductsController = require('../controllers/ProductController')
const router = express.Router();


// C=Create
router.post("/CreateProduct",ProductsController.CreateProduct);


// R=Read
router.get("/ReadProduct",ProductsController.ReadProduct);

// R=Readbyid
router.get("/ReadProductById/:id",ProductsController.ReadProductById);

// U=Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProduct);


// Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProduct);



module.exports=router;