import {FETCH_PARAGRAPHS} from '../actions/types';
import _ from 'lodash';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_PARAGRAPHS:
      return action.payload.data;
    default:
      return state;
  }

}
