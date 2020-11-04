import * as host from './host.js';
const axios = require('axios');

const WarehouseService = {
  getAll: function() {
    return axios.get(host.host + "/warehouse")
    .then(function (res) {
      return res.data;
    })
  },
  getAllProducts: function(warehouse_id) {
    return axios.post(host.host + "/warehouse/getProducts", {
      warehouse_id: warehouse_id
    })
    .then(function (res) {
      return res.data;
    })
  }
}

export default WarehouseService;
