import * as host from './host.js';
const axios = require('axios');

const ProductService = {
  getAll: function() {
    return axios.get(host.host + "/products")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  },
  createProduct: function(product) {
    console.log(product);
    return axios.post(host.host + "/products/insert", product)
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  },
  getAllCategories: function() {
    return axios.get(host.host + "/productCategories")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  },
  getVariantByProduct: function(productId) {
    return axios.post(host.host + "/productVariants/getByVariant", {
      productId: productId
    })
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  },
  getCardex: function() {
    return axios.get(host.host + "/productCardex")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  }
}

export default ProductService;
