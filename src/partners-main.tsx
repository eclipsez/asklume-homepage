import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PartnersPage } from './partnerships/PartnersPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><PartnersPage /></StrictMode>,
)
