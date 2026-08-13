import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ServicesPage } from './services/ServicesPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServicesPage />
  </StrictMode>,
)
