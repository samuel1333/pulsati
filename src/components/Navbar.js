import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div class="navbar">
      <a href="#who">QUEM SOMOS</a>
      <a href="#services">SERVIÇOS</a>
      <a href="#clients">CLIENTES</a>
      <a href="#home">
        <img 
          title="20220104_pulsati_logo_grey1" 
          alt="20220104_pulsati_logo_grey1" 
          data-src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
          class="lazyloaded" 
          src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg" 
        />
      </a>
      <a href="#partners">PARCEIROS</a>
      <a href="#blog">BLOG</a>
      <a href="#contact">CONTATO</a>
    </div>
    </>
  )
}

export default Navbar