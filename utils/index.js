const fs = require('fs');
const path = require('path');

module.exports = {
  fetch: () => new Promise((resolve, reject) =>
      fs.readFile(path.join(__dirname, '../server/db.json'), (err, res) => {
        resolve(JSON.parse(res));
      })
};