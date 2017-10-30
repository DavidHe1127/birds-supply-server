const fs = require('fs');
const path = require('path');

const location = path.join(__dirname, '../db.json');

const read = () => Promise.resolve(require('../db.json'));

const write = dataSource =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      location,
      dataSource,
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve('Data source updated');
      }
    );
  });

module.exports = {
  read,
  write
};
