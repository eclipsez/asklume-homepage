import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ResourcesPage } from './resources/ResourcesPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResourcesPage />
  </StrictMode>,
)
