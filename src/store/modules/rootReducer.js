import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import essay from './essay/reducer';

export default combineReducers({
  auth,
  user,
  essay,
});
