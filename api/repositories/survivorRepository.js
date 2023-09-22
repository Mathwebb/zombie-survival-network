module.exports = () => {
    const db = require('../../db.json');
    const repository = {};

    repository.getAllSurvivors = () => {
        return db.survivors;
    }

    return repository;
}