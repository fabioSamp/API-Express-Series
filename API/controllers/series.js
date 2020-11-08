const uuidv4 = require('uuid/v4');

module.exports = app => {
    const seriesDB = app.data.series;
    const controller = {};

    const { series: seriesMOCK, } = seriesDB;

    controller.listSeries = (req, res) => res.status(200).json(seriesDB);

    controller.saveSeries = (req, res) => {
        seriesMOCK.data.push({
            id: uuidv4(),
            title: req.body.title,
            year: req.body.year,
            type: req.body.type

        });

        res.status(201).json(seriesMock);
    }

    return controller;
    
}