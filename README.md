# google-image-scraper

Usage
------

        scraper.fetch(
            { q: 'Sushi', tbm: 'isch', tbs: 'isz:m', safe: 'active' }
        ).then((urls) => {
            console.log(urls)
        }).catch((err) => {
            console.log(err)
        })

Parameters
-------
see http://illusioncity.net/pcweb-google-operators/
