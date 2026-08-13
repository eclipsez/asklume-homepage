import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalGeoPage } from './global/GlobalGeoPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><GlobalGeoPage /></StrictMode>,
)
