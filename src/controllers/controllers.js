//importamos los modulos necesarios
const cheerio = require('cheerio');
const axios = require('axios');

//guardamos en una constante la url
const URL = 'https://quotes.toscrape.com/';

const scraping = (req, res) => {
    axios(URL)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const citas = [];
        //buscamos en el html los elementos necesarios
        $('div.quote', html).each(function () {
            const autor = $(this).find('small.author').text();
            const text = $(this).find('span.text').text();
            //y los agregamos a un array de objetos
            citas.push({
                autor,
                text
            });
        });
        //y lo mandamos como respuesta en formato json
        res.json(citas);
    })
    .catch((err) => console.log(err));
}

module.exports = scraping;