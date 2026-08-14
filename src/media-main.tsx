import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MediaPage } from './partnerships/MediaPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><MediaPage /></StrictMode>,
)
