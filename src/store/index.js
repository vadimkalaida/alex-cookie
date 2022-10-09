import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducers from "./reducer";

const saveToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch (e) {
    console.error(e);
  }
};

const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedState = loadFromSessionStorage();

const store = createStore(
  rootReducers,
  persistedState,
  compose(applyMiddleware(thunk))
);

store.subscribe(() => saveToSessionStorage(store.getState()));

export default store;