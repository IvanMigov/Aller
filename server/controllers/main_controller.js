const Article = require('../models/article');
const Suggestion = require('../models/suggestion');

const cheerio = require('cheerio');
const request = require("request");
module.exports = {

  parse(req, res, next) {
    console.log('parse body');
    const articleProps = req.body;
    request({uri:articleProps.uri }, function(error, response, body) {
      if(!error){
        const $ = cheerio.load(body);
        const title = $("title").text();
        let paragraphs = [];

        $("p").each(function() {
          let text = $(this).text();
          paragraphs.push(text);
        });
        res.send({title,paragraphs});
      } else {
        next(error);
      }
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

        Suggestion.find({suggestText: articleProps.suggestText, _id: {$in: article.suggestions}})
          .then((suggestions) => {
            if(!suggestions.length){
              article.suggestions.push(suggestion);

              Promise.all([article.save(), suggestion.save()])
                .then((args) => res.status(201).send({article:args[0]}))
                .catch(next);
            }else{
              res.status(302).send({article:article});
            }
          })
          .catch(next);

      })
      .catch(next)

  },
  index(req, res, next) {
    console.log('index');
    const approved = req.headers.showapproved === 'true' ? true : false;

    Article.find({approved})
      .populate('suggestions')
      .then((articles)=>{
        res.status(200).send({articles});

      })
      .catch(next)

  }
};
