import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContactPage } from './support/ContactPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><ContactPage /></StrictMode>)
