const express = require('express');
const { getDescription, changeDescription } = require('../../controllers/description.controllers');


const router = express.Router();

router.route('/').get(getDescription).put(changeDescription);
module.exports = router;