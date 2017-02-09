const fs = require('fs');
const uuid = require('uuid');
const path = `${__dirname}/../tresh`;

function uploadHandler(req, res) {
  const filename = generateName();
  const file = fs.createWriteStream(`${path}/${filename}.png`);

  req.on('data', (data) => { 
    console.log(1);
    file.write(data);
  })
  .on('end', (err) => {
    file.end();
    if (err) throw err;
    res.sendStatus(200);
  })
  .on('error', (err) => {
    if (err) throw err;
  });
}

function generateName() {
  return uuid.v1();
}

module.exports = uploadHandler;