import * as host from './host.js';
const axios = require('axios');

const WarehouseService = {
  getAll: function() {
    return axios.get(host.host + "/warehouses")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      return {code: 0};
    })
  },
  getAllProducts: function(warehouse_id) {
    return axios.post(host.host + "/warehouse/getProducts", {
      warehouse_id: warehouse_id
    })
    .then(function (res) {
      return res.data;
    })
  },
  getAllTypes: function() {
    return axios.get(host.host + "/warehouseTypes")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default WarehouseService;
