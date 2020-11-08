const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');

module.exports = () => {

    const app = express();

    //Variaveis da aplicacao
    app.set('port', process.env.Port ||
    config.get('server.port'));

    //Middleware
    app.use(bodyParser.json());

    //Locais
    consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

        require('../API/routes/series')(app);

    return app;

}