var Product = require("./product.js");

function ProductService(productRepository) {
	this.productRepository = productRepository;
	this.save = function(product) {	
		this.productRepository.save(product);
	};
}

module.exports = ProductService;
