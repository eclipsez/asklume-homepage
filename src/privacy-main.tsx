import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LegalPage } from './support/LegalPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><LegalPage kind="privacy" /></StrictMode>)
