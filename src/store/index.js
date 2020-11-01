import { persistStore } from 'redux-persist';
import createSagaMiddlewares from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSagas from './modules/rootSagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlewares = createSagaMiddlewares({ sagaMonitor });

const middlewares = [sagaMiddlewares];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSagas);

export { store, persistor };
