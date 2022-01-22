const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            name: Joi.string(),
            cpf: Joi.number(),
            office: Joi.string("gerente","vendedor","caixa"),
            birthday: Joi.date().less('now'),
            situation:Joi.string("activate","deactivate")
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });

        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};