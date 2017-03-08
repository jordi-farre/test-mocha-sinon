
const sinon = require('sinon');
const assert = require('assert');
const Product = require("../product/product.js");
const ProductRepository = require("../product/productRepository.js");
const ProductService = require("../product/productService.js");

describe('repository', function(){
	it('save should be invoked when call service save method with a product', function(){
		var product = new Product("test_name", "test_description");
		var productRepository = new ProductRepository();
		var productService = new ProductService(productRepository);
	  	const stub = sinon.stub(productRepository, "save");
      
      	productService.save(product);

      	assert(stub.calledOnce);
      	var stubCall = productRepository.save.getCall(0);
      	assert.equal(1, stub.callCount);
      	assert.equal(product.name, stubCall.args[0].name);
      	assert.equal(product.description, stubCall.args[0].description);
    });
});