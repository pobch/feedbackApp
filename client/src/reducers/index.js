import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { reducer as reduxFormReducer } from 'redux-form'
import surveysReducer from './surveysReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  surveys: surveysReducer
})
