import logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderLink, HeaderLinkB, Logo } from './styles'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <HeaderLink to="/">Restaurantes</HeaderLink>
      <Logo href="">
        <img src={logo} alt="EFOOD" />
      </Logo>
      <HeaderLinkB href="">0 produto(s) no carrinho</HeaderLinkB>
    </div>
  </HeaderBar>
)

export default Header
