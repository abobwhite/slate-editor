import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import Home from './pages/Home'

import './index.css'

const title = 'Reboo SlateJS Editor'

const Example = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Begin Routes */}
        <Match exactly pattern="/" render={() => <Home title={title} />} />
        {/* End Routes */}
      </div>
    </BrowserRouter>
  )
}

export default Example
