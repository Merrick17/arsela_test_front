import { combineReducers } from 'redux'

import formReducer from './forms.reducer'
import formListReducer from './formlist.reducer'
const rootReduer = combineReducers({ formReducer, formListReducer })

export default rootReduer
