import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore } from 'redux';
import reducer from './reducers';

function configureStore() {
    const store = createStore(reducer, composeWithDevTools());

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('./reducers', () => {
    //         const nextRootReducer = require('./reducers');
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    return store;
}

export default configureStore;
