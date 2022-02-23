import './Footer.css'
import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div class="box-footer">
      <div class="icons">
        <a href="https://br.linkedin.com/company/pulsati">
          <FaLinkedinIn class="link" />
        </a>
        <a href="https://www.facebook.com/spintec.oficial">
          <FaFacebookF class="face" />
        </a>
        <a href="/">
          <FaInstagram class="insta" />
        </a>
        <a href="/">
          <FaWhatsapp class="whats" />
        </a>
        <a href="/">
          <FiMail class="mail"/>
        </a>
        </div>
      <div class="logo">
        <a href="/home">
          <img
            title="20220104_pulsati_logo_grey1"
            alt="20220104_pulsati_logo_grey1"
            data-src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
            class="lazyloaded"
            src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
          />
        </a>
      </div>
    </div>
  )
}

