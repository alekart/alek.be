fs = require('fs');
// https://github.com/devmattrick/parcel-plugin-nunjucks#configuration

/**
 * @type nunjucksConfiguration {{ data?: Object | string, env?: Environment | string, filters?: Object, options?: Object, root?: string | Array<string>}}
 */
const nunjucksConfiguration = {
  root: './src/templates',
  data: dataLoader,
  options: {
    noCache: true,
    throwOnUndefined: true,
  }
};

function dataLoader() {
  return JSON.parse(fs.readFileSync('./src/data/default.json', {encoding: 'utf8'}) || {});
}

module.exports = nunjucksConfiguration;
