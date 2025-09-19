import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Start from './pages/Start.jsx'
import Dogs from './pages/Dogs.jsx'
import DogInfo from './pages/DogInfo.jsx'
import Contact from './pages/Contact.jsx'


const router = createHashRouter([
  {path: '/', Component: Start },
  {path: '/dogs', Component: Dogs},
  {path: '/dog_info', Component: DogInfo},
  {path: 'contact', Component: Contact}
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
