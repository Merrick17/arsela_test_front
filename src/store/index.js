import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReduer from '../reducers/root.reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(rootReduer,composeWithDevTools( applyMiddleware(thunk)))

export default store
