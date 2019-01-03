import { combineReducers } from 'redux';

import toggle from './reducers/toggle';

const rootReducer = combineReducers({
  toggle
});

export default rootReducer;

