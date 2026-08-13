import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DiagnosticPage } from './support/DiagnosticPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><DiagnosticPage /></StrictMode>)
