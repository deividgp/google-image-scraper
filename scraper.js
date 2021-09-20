const cheerio = require('cheerio');
const fetch = require('node-fetch');

module.exports = {
  fetch: () => {
    const response = await fetch('https://www.google.com/search?q=hola&tbm=isch/');
    const body = await response.text();
    const $ = cheerio.load(body);
  }
}