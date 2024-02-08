import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import './index.css';
import ContactUs from './components/ContactUs'

function App() {
  return (
    <div>
      <Home />
      <ContactUs />
    </div>
  )
}

export default App
