import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PublicSectorPage } from './partnerships/PublicSectorPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><PublicSectorPage /></StrictMode>,
)
