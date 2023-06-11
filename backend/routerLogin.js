const express = require('express');
const router = express.Router();
const passport = require('passport');

const entryActions = require('./controllers/api/entryActions');

router.post('/login', entryActions.login);

module.exports = router;