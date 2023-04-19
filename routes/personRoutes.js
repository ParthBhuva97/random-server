const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');


router.get('/', personController.getAllPersons);
router.get('/:id', personController.getPersonById);
router.post('/', personController.createPerson);
router.put('/:id', personController.updatePersonById);
router.delete('/:id', personController.deletePersonById);

module.exports = router;
