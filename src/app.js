const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
const routes = require('./routes');

// ...

const app = express();

app.use(express.json());

app.use(routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
