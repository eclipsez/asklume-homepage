import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NotFoundPage } from './support/NotFoundPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><NotFoundPage /></StrictMode>)
