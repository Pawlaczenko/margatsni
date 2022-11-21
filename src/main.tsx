import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/globalStyles';
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IconContext.Provider value={{ className: 'react-icons' }}>
    <GlobalStyles />
    <App />
  </IconContext.Provider>
)
