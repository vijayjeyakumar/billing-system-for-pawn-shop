var express = require('express');
var router = express.Router();
const billController = require('../controller/billController/billController');



//Router for generateBill
router.post('/generateBill', function(req, res) {
      console.log("routing to generate Bill - Save Bill To DB  ");
      billController.saveBill(req, res);
}); 
module.exports = router;
