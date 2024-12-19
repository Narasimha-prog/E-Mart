import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'  // Use HashRouter instead of BrowserRouter
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>  {/* Use HashRouter */}
    <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </StrictMode>
  </HashRouter>
)
