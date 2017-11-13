import axios from 'axios';
import {
  FETCH_PARAGRAPHS
} from './types';
const requestUrl = 'http://localhost:3050/api';

export function fetchParagraphs() {
  const uri = 'http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-etter-et-barbesok-na-svarer-hun-pa-kritikken/68573788';
  const request = axios.post(`${requestUrl}/parse`,{uri});

  return {
    type: FETCH_PARAGRAPHS,
    payload: request
  };
}