

function ProductRepository() {

	this.save = function(product) {
		console.log(product.name);
		console.log(product.description);
	};

}

module.exports = ProductRepository;