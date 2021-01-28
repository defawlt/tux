import React from 'react'
import { Route } from 'react-router-dom'
import Login from './pages/Login/Login'

export default function App() {
  return (
    <>
      <Route
        exact
        path="/login"
        render={({ history }) => <Login history={history} />}
      />
    </>
  )
}
