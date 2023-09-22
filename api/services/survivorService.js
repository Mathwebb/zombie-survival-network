module.exports = () => {
    const repository = require('../repositories/survivorRepository')();
    const service = {};

    service.getAllSurvivors = () => {
        return repository.getAllSurvivors();
    }

    return service;
}