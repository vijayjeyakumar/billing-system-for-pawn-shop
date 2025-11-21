var express = require('express');
var router = express.Router();
const customerController = require('../controller/customerController/customerController');
 
//Router for customer list page
router.get('/customer-list-page', function(req, res) {
      console.log("routing to customer list page - fetch customer list ");
      customerController.fetchCustomerList(req, res);
});

//Router for customer-details page
router.get('/customer-details-page/:id', function(req, res) {
  console.log("routing to customer details page - fetch individual customer details ");
  customerController.fetchCustomerDetails(req, res);
});


module.exports = router;
