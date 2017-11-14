const Article = require('../models/article');
const Suggestion = require('../models/suggestion');

const cheerio = require('cheerio');
const request = require("request");
module.exports = {

  parse(req, res, next) {
    console.log('parse body');
    const articleProps = req.body;
    request({uri:articleProps.uri }, function(error, response, body) {
      const $ = cheerio.load(body);
      const title = $("title").text();
      let paragraphs = [];

      $("p").each(function() {
        let text = $(this).text();
        paragraphs.push(text);
      });
      res.send({title,paragraphs});
    });

  },
  create(req, res, next) {
    console.log('create');
    const articleProps = req.body;
    const suggestion = new Suggestion({ suggestText: articleProps.suggestText, approved: false });

    Article.findOne({ url: articleProps.uri,originalText: articleProps.originalText})
      .then((article)=>{
        if (!article) {
          article = new Article({ url: articleProps.uri,originalText: articleProps.originalText});
        }
        article.suggestions.push(suggestion);

        Promise.all([article.save(), suggestion.save()])
          .then((args) => res.status(201).send({article:args[0]}))
          .catch(next);
      })
      .catch(next)

  }
};
