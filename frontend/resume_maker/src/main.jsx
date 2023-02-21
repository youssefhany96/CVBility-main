import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TemplateState from './context/TemplateState'
import ComponentList from './context/ComponentList'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
    <TemplateState>
      <ComponentList>
          <App />
      </ComponentList>
    </TemplateState>
  </ThemeProvider >
  </BrowserRouter>
)
