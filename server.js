const express = require('express');
const app = express();
var emoji = require('node-emoji');

app.use(express.static(__dirname + '/dist'));

const server = app.listen(8080, () => {
	require('dns').lookup(require('os').hostname(), function (err, add, fam) {
		var dt = Date(Date.now())
		console.log(emoji.get('watch') + ' | ' + dt)
		console.log(emoji.get('pizza') + ' | Server up → ' + add + ":" + server.address().port)
	})
})