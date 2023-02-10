import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import Header from '../src/components/Header'
import LateralBar from '../src/components/Lateral Bar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <Header />

    <LateralBar />
    
  </React.StrictMode>

)