const express = require('express');
const { register, login, refreshToken } = require('../controllers/auth');
const router = express.Router();
const validate = require('../middleware/validate');
const { registerSchema, loginSchema } = require('../validators/schemas');

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/refresh', refreshToken);

module.exports = router;
