import {combineReducers} from 'redux'

import formReducer from './forms.reducer'

const rootReduer = combineReducers({ formReducer })

export default rootReduer
