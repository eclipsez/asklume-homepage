import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SolutionsPage } from './solutions/SolutionsPage'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode><SolutionsPage /></StrictMode>,
)
