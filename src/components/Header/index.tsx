import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { HeaderBar, HeaderLink, HeaderLinkB, Logo } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <HeaderLink to="/">Restaurantes</HeaderLink>
        <Logo href="">
          <img src={logo} alt="EFOOD" />
        </Logo>
        <HeaderLinkB onClick={openCart}>
          {items.length} produto(s) no carrinho
        </HeaderLinkB>
      </div>
    </HeaderBar>
  )
}

export default Header
