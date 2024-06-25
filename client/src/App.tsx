import React from 'react'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage'

const App = () => {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  )
}
export default App
