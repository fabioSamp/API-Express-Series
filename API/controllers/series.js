module.exports = () => {
    const seriesDB = require('../data/series.json');
    const controller = {};

    controller.listSeries = (req, res) => res.status(200).json(seriesDB);

    return controller;
    
}