import React from 'react';
import RandMContainer from '../../containers/RandMContainer';
import DetailPage from '../../containers/DetailPage';
import {
    BrowserRouter as Router,
    Route,
    Switch,
   } from 'react-router-dom';

export default function App() {
    return (
        <Router>
        <Switch>
        <Route path="/" 
        exact 
        render={routerProps => <RandMContainer {...routerProps}/>}/>
         <Route path="/:character" 
        exact 
        render={routerProps => <DetailPage {...routerProps}/>}/>
        
        
        </Switch>
        </Router>  



    )
}