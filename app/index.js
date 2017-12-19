import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducer from './reducers';

import Main from '../app/blocks/main/main.js';

const store = createStore(reducer, composeWithDevTools());

const component = () => {
    render(
        <Provider store={store}>
            <Router>
                <Route path="/" component={Main} />
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
};

component();

if (module.hot) {
    module.hot.accept(() => {
        component();
    });
}
