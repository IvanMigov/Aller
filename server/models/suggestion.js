const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  suggestText: {
    type:String,
    required: [true, 'Suggestion text is required.']
  },
  approved: Boolean
});

const Suggestion = mongoose.model('userSuggestion', SuggestionSchema);

module.exports = Suggestion;
