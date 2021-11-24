import { configureStore as startKitConfigureStore, EnhancedStore } from '@reduxjs/toolkit';
import { enhancer as StorybookAddonEnhancer } from 'addon-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = (): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = startKitConfigureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
    enhancers: [StorybookAddonEnhancer],
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
