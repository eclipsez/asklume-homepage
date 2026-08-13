import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FaqPage } from './support/FaqPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><FaqPage /></StrictMode>)
