'use strict'

let cheerio = require('cheerio-httpcli')
let Html5Entities = require('html-entities').Html5Entities
let htmlEntities = new Html5Entities()
let url = require('url')

const SEARCH_URL = 'https://www.google.com/search'

module.exports = {
  fetch: (params) => {
    return new Promise((resolve, reject) => {
      cheerio.fetch(SEARCH_URL, params, (err, $, res) => {
        if (err) {
          return reject(err)
        }
        let urls = $('.rg_l').map((index, element) => {
          return url.parse(htmlEntities.decode($(element).attr('href')), true).query.imgurl
        }).get()
        resolve(urls)
      })
    })
  }
}
