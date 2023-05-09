const express = require('express');
const router = express.Router();

const entryActions = require('../controllers/api/entries');

router.get('/', entryActions.saveEntry);

module.exports = router;