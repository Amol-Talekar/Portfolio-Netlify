import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'

const Routes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
               
            </Switch>
            
        </div>
    )
}

export {Routes}
