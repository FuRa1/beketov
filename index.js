const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

/* api */
const fileHandler = require('./files/upload');

/* middleware */
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(express.static('public'));

/* routing */
app.get('/', (req, res) => {
	// res.sendStatus(200);
	res.sendFile('index.html');
});

app.post('/upload', fileHandler);


app.use((req, res, next) => {
  res.sendStatus(404);
});
/* run */
app.listen('3000');
