const express = require('express');
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contact');

const router = express.Router();

const { protect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createContactSchema, updateContactSchema } = require('../validators/schemas');

router.use(protect);

router.route('/').get(getContacts).post(validate(createContactSchema), createContact);

router.route('/:id').get(getContact).put(validate(updateContactSchema), updateContact).delete(deleteContact);

module.exports = router;
