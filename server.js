const fs = require('fs');
const path = require('path');
const polka = require('polka');
const send = require('@polka/send');


const { PORT = 4201 } = process.env;

module.exports = {
  start: (startupDir) => {
    const indexFile = path.resolve(startupDir, 'index.html');
    fs.readFile(indexFile, 'utf8', (err, contents) => {
      const serveStatic = require('sirv')(startupDir);
      polka()
        .use(serveStatic)
        .get('*', (request, response) => {
          return send(response, 200, contents);
        })
        .listen(PORT, () => {
          console.log('listening on PORT', PORT);
        });
    });
  }
};