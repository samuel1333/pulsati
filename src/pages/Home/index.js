import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Home.css';


function Home() {
  return (
    <div className="Home">
      <div className="navbar">
      </div>
      <div className="home-page-gradient">
        <div className="main-title">
          <img
            title="20220104_pulsati_logo_grey1"
            alt="20220104_pulsati_logo_grey1"
            data-src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
            class="lazyloaded"
            src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_grey1.svg"
          />
          <p>NOVO SITE MUITO EM BREVE</p>

        </div>
      </div>
      <div className="form">
        <div class="contato">
          <h6>ENTRE EM CONTATO</h6>
          <p>Entre em contato com a gente para agendarmos uma conversa a respeito da situação de sua empresa. Dessa forma, poderemos analisar como conseguiremos lhe ajudar, visando melhorar seus processos internos e resultados.</p>
          <div class="user">
            <input type="text" placeholder="NOME" />
            <input type="text" placeholder="SOBRENOME" />
            <input type="text" placeholder="TELEFONE" />
          </div>
          <div class="mail" >
            <input type="email" placeholder="EMAIL" />
            <input type="text" placeholder="ASSUNTO" />
          </div>
          <textarea rows='20' type="text" class="mensagem" placeholder="MESSAGE" />
          <button>ENVIAR</button>
        </div>
        <div class="newsletter">
          <div class="logo">
            <img
              title="20220104_pulsati_logo_LightGrey"
              alt="20220104_pulsati_logo_LightGrey"
              data-src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_LightGrey.svg"
              class=" lazyloaded"
              src="https://pulsati.com.br/wp-content/uploads/2022/01/20220104_pulsati_logo_LightGrey.svg"
            />
          </div>
          <div class="icons-newsletter">
            <a href="/email"><FiMail /></a>
            <a href="/whatsapp"><FaWhatsapp /></a>
          </div>
          <div class="map">
            <p>Alameda Rocha Azevedo, 38<br />Conj. 1204 – Cerqueira César<br />São Paulo</p>
            <p>De Segunda a Sexta das 9hs às 18hs<br />Política de Privacidade</p>
            <button class="map-button">VER NO MAPA</button>
          </div>
          
          <div class="subscribe">
            <p>SUBSCREVA À NEWSLETTER</p>
            <input type="text" placeholder="NOME COMPLETO" />
            <input type="email" placeholder="EMAIL" />
          </div>
          <button class="sub-button">SUBSCREVER</button>
        </div>
      </div>
    </div>
  );
}

export default Home;