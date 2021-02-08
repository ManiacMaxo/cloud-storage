import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/index.scss'
import Authenticate from './Authenticate'

const Home = React.lazy(() => import('./Home'))

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path={['/login']} exact>
                    <Suspense fallback='loading...'>
                        <Authenticate />
                    </Suspense>
                </Route>
                <Route path='/'>
                    <Suspense fallback='loading...'>
                        <Home />
                    </Suspense>
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
