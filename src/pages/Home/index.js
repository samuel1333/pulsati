import './Home.css';
import Who from './../Who/index';
import Clients from './../Clients/index';
import Contact from './../Contact/index';
import Partners from './../Partners/index';


function Home() {
  return (
    <div className="Home">
      <div className="home-page-gradient" id="home">
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
      <Who />
      <Clients />
      <Partners />
      <Contact />
    </div>
  );
}

export default Home;