import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Maps } from '@jochenklar/maps'

import '@jochenklar/maps/bootstrap.scss'
import '@jochenklar/maps/style.scss'

import config from './maps.config.js'
import './maps.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maps config={config} />
  </StrictMode>,
)
