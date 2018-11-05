const express = require('express');
const app = express();
var emoji = require('node-emoji');

app.set('views', __dirname + '/src');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res) {
	res.render('index',
		{ title : 'fA' }
	);
});

const server = app.listen(7000, () => {
  console.log(emoji.get('pizza') + ` | Express running → PORT ${server.address().port}`);
});