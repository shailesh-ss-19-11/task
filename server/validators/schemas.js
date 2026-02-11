const { z } = require('zod');

const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
});

const createContactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    phone: z.string().optional(),
    company: z.string().optional(),
    status: z.enum(['Lead', 'Prospect', 'Customer']).optional(),
    notes: z.string().optional()
});

const updateContactSchema = createContactSchema.partial();

module.exports = {
    registerSchema,
    loginSchema,
    createContactSchema,
    updateContactSchema
};
