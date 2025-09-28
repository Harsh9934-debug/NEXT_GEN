import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
import { inject } from '@vercel/analytics';
import { Analytics } from "@vercel/analytics/react"
if (import.meta.env.PROD) {
  inject();
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </HashRouter>
  </React.StrictMode>,
  <Analytics />
)
