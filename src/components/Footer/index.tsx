import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Botao, FooterBar, Logos, Mensagem } from './styles'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <Botao href="">
        <img src={logo} alt="EFOOD" />
      </Botao>
      <Logos>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </Logos>
      <Mensagem>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Mensagem>
    </div>
  </FooterBar>
)

export default Footer
