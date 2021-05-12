import React from 'react';
import RandMContainer from '../../containers/RandMContainer';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={RandMContainer} />
                <Route path="/:id" component={RandMDetailContainer} />

            </Switch>


        </Router>
    )
}