import { combineReducers } from 'redux';
import paragraphs from './paragraphs';
import articles from './articles';

export default combineReducers({
  paragraphs,
  articles
});
