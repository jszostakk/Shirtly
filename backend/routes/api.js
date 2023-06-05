const express = require('express');
const router = express.Router();
const passport = require('passport');

const entryActions = require('../controllers/api/entryActions');

router.get('/entries', entryActions.getEntries);
router.get('/entries/:id', entryActions.getEntry);
router.post('/entries', entryActions.saveEntry);
router.put('/entries/:id', entryActions.updateEntry);
router.delete('/entries/:id', entryActions.deleteEntry);
router.post('/login', entryActions.login);

module.exports = router;