var express = require('express');
var router = express.Router();
const loginController = require('../controller/usersController/loginController');


//Router for login functionality
router.post('/login',loginController.login)

//Router for customer list page
router.get('/customer-list-page', function(req, res, next) {
  res.send('respond with a resource');
});

//Router for custoemr-detials page
router.post('/customer-details-page', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
