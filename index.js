const express = require('express');
const app = express();
const router = express.Router();

app.use(router);

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen('3000');