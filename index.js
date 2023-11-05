const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startegy');

dotenv.config({ path: 'config/.env' });

const app = express();

// set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 100 },
  })
);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded({ extended: true }));

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// express router
app.use('/', require('./routes'));

const port = 8000;

// listen on port
app.listen(port, function (error) {
  if (error) {
    console.log(`Error in connecting to server: ${error}`);
    return;
  }
  console.log(`Server running on port: ${port}`);
});


// const url = 'https://indeed-indeed.p.rapidapi.com/apisearch?publisher=%3CREQUIRED%3E&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd1362242d3msh59967ae783160e3p1e42bejsn589918d11361',
// 		'X-RapidAPI-Host': 'indeed-indeed.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }