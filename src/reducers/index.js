// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script containing Redux reducers
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
import { combineReducers } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import test1 from './test1.js';
import test2 from './test2.js';
// ----------------------------------------------------------------------------

// Reducers Export ------------------------------------------------------------
export default combineReducers({
  test1,
  test2
})
// ----------------------------------------------------------------------------
