module.exports = app => {
    const controller = app.controllers.series;

    app.route('/API/series')
        .get(controller.listSeries)
        .post(controller.saveSeries);
    
}


/* Verbos HTTP
GET / POST / PUT / DELETE
*/

