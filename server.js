const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Register Handlebars view engine
app.engine('handlebars', exphbs());
// Use Handlebars view engine
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('**', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});