import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GeoAipPage } from './methodology/GeoAipPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeoAipPage />
  </StrictMode>,
)
