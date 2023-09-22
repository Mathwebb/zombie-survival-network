module.exports = app => {
    const controller = require('../controllers/survivorController')();

    app.route('/survivors')
        .get(controller.getAllSurvivors);
}