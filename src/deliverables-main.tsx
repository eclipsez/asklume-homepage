import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DeliverablesPage } from './support/DeliverablesPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(<StrictMode><DeliverablesPage /></StrictMode>)
