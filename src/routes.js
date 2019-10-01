import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import main from './pages/main/main'
import React from 'react'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={main} />
        </BrowserRouter>
    );
}