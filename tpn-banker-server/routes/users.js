var express = require('express');
var router = express.Router();
const loginController = require('../controller/usersController/loginController');



//Router for login functionality
router.post('/login', function(req, res) {
      console.log("routing to customer list page - fetch customer details ");
      loginController.login(req, res);
}); 
module.exports = router;
