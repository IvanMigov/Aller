const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  suggestText: String,
  approve: Boolean
});

module.exports = SuggestionSchema;
