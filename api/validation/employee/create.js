const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            name: Joi.string().required(),
            cpf: Joi.number().required(),
            office: Joi.string("gerente","vendedor","caixa").required(),
            birthday: Joi.date().required().less('now')
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });

        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};