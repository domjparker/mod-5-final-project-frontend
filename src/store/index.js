import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer.js'
import photosReducer from './reducers/photosReducer.js'


const rootReducer = combineReducers({
  auth: authReducer,
  photos: photosReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
export * from './actions/authActions'
export * from './actions/photoActions'
