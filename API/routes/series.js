module.exports = app => {
    const controller = app.controllers.series;

    app.route('/api/series')
        .get(controller.listSeries)
        .post(controller.saveSeries);
    
}


/* Verbos HTTP
GET / POST / PUT / DELETE
*/

