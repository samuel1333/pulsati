import './Partners.css'
import React from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export default function Partners() {
  return (
    <div>
      <div class="title" id="partners">
        <h1>VEJA TAMBÉM QUEM CONFIA NA PULSATI:</h1>
      </div>
      <div class="back-logos-partners">
        <button class="button-left">
          <FaArrowLeft />
        </button>
        <div class="logos-partners">
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/spincare_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="Spincare"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/clickskin_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="click skin"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/logo-fg_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="FG"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/ambev_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="ambevtech"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/flex_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="flex"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/ASQSaude_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="asq a resposta é saúde"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/qualirede_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="qualirede gestão em saúde"
          />
          <img
            src="https://spintec.com.br/images/uploads/quem-confia/_webp/MV_webp_1140fe121a60f2be3e465aaec6c5e83f.webp"
            alt="MV"
          />
        </div>
        <button class="button-right">
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}