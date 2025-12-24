import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import Middle from './Middle.jsx'
import Fotter from './Fotter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Middle />
    <Fotter />
  </StrictMode>,
)
