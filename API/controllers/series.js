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

    controller.removeSeries = (req, res) =>{
        const { serieID, } = req.params;
        
        const foundSerieIndex = seriesMOCK.data.findIndex(serie => serie.id === serieID);


        if(foundSerieIndex === -1){
            res.status(404).json({
                message: 'Serie não encontrada',
                success: false,
                series: seriesMOCK
            });
        }else {
            seriesMOCK.data.splice(foundSerieIndex, 1);
            res.status(200).json({
                message: 'Serie removida com sucesso!',
                success: true,
                series: seriesMOCK
            });
        }

    }

    return controller;
    
}