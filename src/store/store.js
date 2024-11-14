import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootreducer } from './AllReducers/rootreducers'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootreducer)  
export let store = createStore(persistedReducer)
export let persistor = persistStore(store)

