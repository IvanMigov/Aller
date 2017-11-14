const mongoose = require('mongoose');
const Suggestion = require('../models/suggestion');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  url: {
    type: String,
    required: [true, 'URL is required.']
  },
  originalText: {
    type: String,
    required: [true, 'Original Text is required.']
  },
  approved: {
    type: Boolean,
    default: false
  },
  suggestions:[{
    type: Schema.Types.ObjectId,
    ref: 'userSuggestion'
  }]
});

ArticleSchema.pre('remove', function(next) {
  Suggestion.remove({ _id: { $in: this.suggestions } })
    .then(() => next());
});
ArticleSchema.pre('save', function(next) {
  if(this.approved){
    Suggestion.update(
      { _id: { $in: this.suggestions } },
      { approved: false },
      { multi: true }
    ).then(() => next());
  }else{
    next();
  }
});
const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
