import { useSelector, useDispatch } from 'react-redux'
import { close } from '../../store/reducers/checkout'
import { RootReducer } from '../../store'
import { Botao, CartContainer, Overlay, SideBar } from './styles'

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(close())
  }

  const total = items.reduce((soma, item) => {
    return soma + (item.preco || 0)
  }, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <SideBar>
        <Botao>Continuar com a entrega</Botao>
      </SideBar>
    </CartContainer>
  )
}

export default Checkout
