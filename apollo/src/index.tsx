import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ApolloProvider } from '@apollo/client'
import Client from './config/apolloClient'

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
