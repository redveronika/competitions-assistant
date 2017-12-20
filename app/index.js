import React from 'react';
import { AppContainer } from 'react-hot-loader';
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './configureStore';

import Main from '../app/blocks/main/main.js';

const store = configureStore();

const component = () => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Main} />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app'),
    );
};

component();

if (module.hot) {
    module.hot.accept(() => {
        component();
    });
}
