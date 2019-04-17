const express = require('express');
const expresshandlebars = require('express-handlebars');
const path = require('path');
const colors = require('colors');

const { database_keys } = require('../database/database_keys');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshandlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

/* Middlewars */
/* app.use(session({
    secret: 'random_secrete_string',
    resave: false,
    saveUnitialized: false,
    store: new mysqlstore(database_keys)
})); */

/* Routes */
app.use(require('./routes/authentication'));

/* Public */
app.use(express.static(path.join(__dirname, 'public')));

/* Starting the server */
app.listen(app.get('port'), () => {
    console.log(colors.rainbow('Server on port: ' + app.get('port')));
    console.log(colors.america('¡Welcome devs! Visit localhost:4000 to deploy'));
});