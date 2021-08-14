import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './rootSaga'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]
const devMiddleware = [logger]
const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const middlewares = process.env.NODE_ENV !== 'production' ? [...middleware, ...devMiddleware] : [...middleware]
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(rootSaga)

export default store