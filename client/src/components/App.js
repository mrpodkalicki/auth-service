import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import MainView from './MainView';

const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <Route path="/"  exact components = {MainView}  />
            </BrowserRouter>
            <MainView/>
        </div>
    );
};

export default App;