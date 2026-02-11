const { z } = require('zod');

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                error: err.errors.map((e) => e.message).join(', ')
            });
        }
        next(err);
    }
};

module.exports = validate;
