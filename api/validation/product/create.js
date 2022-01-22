const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            name: Joi.string().required(),
            category: Joi.string().required(),
            price: Joi.float().required(),
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });

        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};