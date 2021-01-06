import * as host from './host.js';
const axios = require('axios');

const AddressService = {
    getAllDepartments: function() {
        return axios.get(host.host + "/departments/")
        .then(function (res) {
            return res.data;
        })
    },
    getAllDistricts: function() {
        return axios.get(host.host + "/districts/")
        .then(function (res) {
            return res.data;
        })
    },
    getAllVias: function() {
        return axios.get(host.host + "/vias/")
        .then(function (res) {
            return res.data;
        })
    }
}

export default AddressService;
