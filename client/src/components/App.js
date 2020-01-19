import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';


import MainView from './MainView';
import NavigationBar from './NavigationBar';

const App = () =>{
    return (
        <div>
            <NavigationBar/>
            <BrowserRouter>
                <Route path="/"  exact components = {MainView}  />
            </BrowserRouter>
            <MainView/>
        </div>
    );
};

export default App;