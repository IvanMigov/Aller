const Article = require('../models/article');
const cheerio = require('cheerio');
const request = require("request");
const uri = 'http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788 0';
module.exports = {

  parse(req, res, next) {
    const articleProps = req.body;
    request({
      uri,
    }, function(error, response, body) {
      const $ = cheerio.load(body);
      const title = $("title").text();
      let paragraphs = [];

      $("p").each(function() {
        let text = $(this).text();
        paragraphs.push(text);
      });
      res.send({title,paragraphs});
    });

    // Article.create(articleProps)
    //   .then(article => res.send(article))
    //   .catch(next)
  }

  // edit(req, res, next) {
  //   const driverId = req.params.id;
  //   const driverProps = req.body;
  //
  //   Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
  //     .then(() => Driver.findById({ _id: id }))
  //     .then(driver => res.send(driver))
  //     .catch(next);
  // },
  //
  // delete(req, res, next) {
  //   const driverId = req.params.id;
  //
  //   Driver.findByIdAndRemove({ _id: driverId })
  //     .then(driver => res.status(204).send(driver))
  //     .catch(next);
  // }
};
