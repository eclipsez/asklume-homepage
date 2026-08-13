import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResourceDetailPage } from './resources/ResourceDetailPage'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResourceDetailPage />
  </React.StrictMode>,
)
