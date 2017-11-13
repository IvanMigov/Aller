import React from 'react';
import _ from 'lodash';

export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload
      .then(function(response) {
        const newAction = _.extend(action, {payload: response});
        newAction.callback && newAction.callback();
        dispatch(newAction);
      });
  }
}
