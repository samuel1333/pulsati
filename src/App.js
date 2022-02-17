import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
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
          <textarea rows="25" type="text" class="mensagem" placeholder="MESSAGE" />
          <button>ENVIAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
