import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter, Routes,  Route, Link } from 'react-router-dom'

const FlightsApp = React.lazy(() => import('flights/App'))
const TrainsApp = React.lazy(() => import('trains/App'))

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/trains">Trains</Link></li>
        <li><Link to="/flights">Flights</Link></li>
      </ul>
    </nav>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/trains" element={<TrainsApp />} />
          <Route path="/flights" element={<FlightsApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
