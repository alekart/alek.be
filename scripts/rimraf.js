const fs = require('fs');
const rimraf = require('rimraf');
const folders = process.argv.slice(2) || null;

if (!folders) {
  throw new Error('No folder path provided');
}

folders.forEach((value) => {
  fs.open(value, 'r', (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(`${value} does not exist`);
        return;
      }
      throw err;
    }
    console.log(`Removing ${value} folder and all it\'s content`);
    rimraf.sync(value);
  });
});
