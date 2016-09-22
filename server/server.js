const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connection = require('./db/connection');
const passport = require('passport');
const moment = require('moment');

const router = require('./config/routes');

const app = express();
//set up port
app.set('PORT', process.env.PORT || 3000);
app.use(cors());

app.use(bodyParser.json());
app.use(require('cookie-parser'));
app.use(require('express-session')({
	secret: 'giggsthebest',
	resave: true,
	saveUninitalized: true
}));

app.use(express.static('./client'));
app.use('/client', express.static('./node_modules'));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', router);
require('./config/fbRoutes')(app, passport);

app.get('*', (request, response) => {
	response.sendFile(path.resolve('./', 'client', 'index.html'));
});

//connect to database
connection.sync().then(() => {
	console.log('tables synced');
});

app.listen(app.get('PORT'), () => {
	console.log(`[${moment().format('hh:mm:ss')}]Express Server listening on port`, app.get('PORT'));
});

module.exports = app;
