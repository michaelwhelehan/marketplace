import React from 'react'
import GlobalStyle from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import usePageTracking from './hooks/usePageTracking'

function RouteContainer() {
  usePageTracking()

  return <Routes />
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RouteContainer />
      </Router>
    </>
  )
}

export default App
