import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CasesPage } from './support/CasesPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><CasesPage /></StrictMode>)
