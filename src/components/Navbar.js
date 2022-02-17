import React from 'react'

function Navbar() {
  return (
    <>
    <div class="navbar">
      <a href="#home">QUEM SOMOS</a>
      <a href="#news">SERVIÇOS</a>
      <a href="#contact">CLIENTES</a>
      <a href="/home">
        <img 
          title="20220104_pulsati_logo_grey1" 
          alt="20220104_pulsati_logo_grey1" 
          data-src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
          class="lazyloaded" 
          src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg" 
        />
      </a>
      <a href="#home">PARCEIROS</a>
      <a href="#news">BLOG</a>
      <a href="#contact">CONTATO</a>
    </div>
    </>
  )
}

export default Navbar