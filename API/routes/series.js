module.exports = app => {
    const controller = app.controllers.series;

    app.route('/api/series')
        .get(controller.listSeries)
        .post(controller.saveSeries);
    
    app.route('/AP/series/:serieID')
        .delete(controller.removeSeries);
}


/* Verbos HTTP
GET / POST / PUT / DELETE
*/

