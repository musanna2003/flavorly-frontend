import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router'
import { MyProvider } from '../public/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <RouterProvider router={router}  />
    </MyProvider>
  </StrictMode>,
)
