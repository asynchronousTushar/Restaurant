import React from 'react';
import './styleshits/App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
    return (
        <div className="App">
            <Provider store={Store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
