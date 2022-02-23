import React, { Component } from 'react'
import quemSomosSpintec from '../../images/quem-somos-spintec.webp'
import mulherComputador2 from '../../images/mulher-computador2.jpg'

export default class WhoContent extends Component {
  render() {
    return (
      <>
        <div class="gradient">
          <img 
            id=""
            src="https://media-exp1.licdn.com/dms/image/C4E1BAQGIrl4Hgftxeg/company-background_10000/0/1641397265649?e=2159024400&v=beta&t=nox_BtQqdMqSX_bZErA5BL89akvlDSLpXuKgWZ8PXbU" 
            alt="Trazemos soluções em tecnologia para negócios de saúde"
          />
          <div class="container">
            <div class="box">
              <p>
                <h1>Quem Somos</h1>
                Pela definição legal, somos uma fábrica de software e body shop - uma empresa que utiliza tecnologia, design e mão de obra qualificada para projetar e desenvolver sistemas e aplicações personalizadas. Mas, nós gostamos mesmo é do jeito que os clientes nos chamam.<br/><br/>
                Pela definição mais legal, somos resolvedores de problemas. É isso que fazemos há mais de 20 anos. Resolvemos problemas tecnológicos de empresas de todos os portes e de todos os segmentos, principalmente na área da saúde. Fazemos isso com agilidade e comprometimento em todas as etapas: projeto, implantação, sustentação e suporte técnico.<br/><br/>
                A gente sabe que pensar em desenvolver um sistema novo, trocar, aprimorar ou integrar softwares pode ser estressante, mas estamos aqui para provar que não precisa ser assim.
              </p>
            </div>
          </div>
          <div class="middle-container" id="who">
            <div id="middle-part1" className={this.props.className} >
                <h1>Lorem Ipsiom</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec massa tellus. Suspendisse suscipit sem nec efficitur pharetra. Ut aliquet scelerisque nunc, et sollicitudin leo aliquam at. Proin tortor ipsum, hendrerit semper tellus fermentum, suscipit dignissim metus. Aliquam erat volutpat. Phasellus eleifend semper porta. Cras porttitor, ex vel viverra egestas, est magna porttitor lacus, in malesuada metus erat nec mauris. Nunc in nibh a nisl finibus egestas. Etiam consequat volutpat pellentesque. Aliquam augue ipsum, tempus nec eros nec, pretium sodales nunc. In ut libero id orci blandit gravida. Etiam commodo, massa in porttitor aliquam, est est scelerisque velit, eu semper ex turpis ut metus. Donec tempus facilisis mi eget egestas. Curabitur velit augue, facilisis id neque in, volutpat faucibus sapien.
                  In lobortis justo mattis eros efficitur laoreet. Sed sodales, ligula non ornare efficitur, sapien est maximus neque, in lacinia ipsum tortor sit amet orci. Morbi quis placerat velit, quis tempus odio. Suspendisse eget aliquam lorem. In porta et urna non sodales. Vestibulum euismod, dolor sed cursus euismod, tortor justo malesuada orci, non tristique libero purus eu felis. Vestibulum interdum libero mi, a elementum nulla varius eu. Etiam eu ex molestie, faucibus ante at, rhoncus ligula.
                </p>
            </div>
            <div class="middle-part2" >
                <img src={quemSomosSpintec} alt="um homem no computador sorrindo" />
                <img src={mulherComputador2} alt="uma mulher no escuro com um computador"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
