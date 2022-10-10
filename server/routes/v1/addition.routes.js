const express = require('express');
const { addNumbers } = require('../../controllers/addition.controllers');

const router = express.Router();

router.route('/').post(addNumbers);
module.exports = router;