import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || '/graphql',
  cache: new InMemoryCache(),
})

const Main = () => (
  <Router>
    <ApolloProvider client={client}>
      <Route render={({ history }) => <App history={history} />} />
    </ApolloProvider>
  </Router>
)

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
