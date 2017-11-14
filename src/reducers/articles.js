import {FETCH_ARTICLES} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload.data.articles;
    default:
      return state;
  }

}
