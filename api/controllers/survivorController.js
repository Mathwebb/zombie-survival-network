module.exports = () => {
    const service = require('../services/survivorService')();
    const controller = {};

    controller.getAllSurvivors = (req, res) => {
        return res.json(service.getAllSurvivors()).status(200);
    }

    return controller;
}