import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import routePath from './config/routePath'
import ApolloClient from './container/apolloClient'
import ApolloTools from './container/apolloTools'
import LiveChat from './container/liveChat'
import Context from './config/context'

function App() {
  return (
    <Context.Provider value={{}}>
      <Router>
        <Switch>
          <Route exact path={routePath.apolloClient} component={ApolloClient} />
          <Route exact path={routePath.apolloTools} component={ApolloTools} />
          <Route exact path={routePath.liveChat} component={LiveChat} />
          <Redirect to={routePath.apolloClient} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default App
