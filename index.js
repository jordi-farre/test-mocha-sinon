
var Product = require("./product/product.js");
var ProductRepository = require("./product/productRepository.js");
var ProductService = require("./product/productService.js");

var product = new Product("test_name", "test_description");
var productRepository = new ProductRepository();
var productService = new ProductService(productRepository);
productService.save(product);