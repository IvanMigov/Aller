import axios from 'axios';
import {
  FETCH_PARAGRAPHS,
  DO_NOT_CHANGE_STATE,
  FETCH_ARTICLES
} from './types';
const requestUrl = 'http://localhost:3050/api';

export function fetchParagraphs(uri) {
  uri = uri || 'http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788';
  const request = axios.post(`${requestUrl}/parse`, {uri});

  return {
    type: FETCH_PARAGRAPHS,
    payload: request
  };
}
export function fetchArticles(showApproved) {
  console.log('showApproved',showApproved);
  const request = axios.get(`${requestUrl}/articles`, { params:{showApproved}});

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}
export function saveSuggestion(suggestion) {
  console.log(suggestion);
  if(!suggestion.uri){
    suggestion.uri = 'http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788';
    console.warn('Please specify articleURL in URL')
  }
  const request = axios.put(`${requestUrl}/suggestion`,suggestion);

  return {
    type: DO_NOT_CHANGE_STATE,
    payload: null
  };
}
export function approveSuggestion(suggestion) {
  console.log(suggestion);
  const request = axios.patch(`${requestUrl}/approve`,suggestion);

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}