import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom'
import Home from '@/containers/home'
import Reselect from '@/containers/reselect'

export default function(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/reselect" component={Reselect}></Route>
        </BrowserRouter>
    )
}
