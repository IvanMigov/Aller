const mongoose = require('mongoose');
const SuggestionSchema = require('./suggestion');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  url: String,
  originalText: String,
  suggestions: [SuggestionSchema]
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
