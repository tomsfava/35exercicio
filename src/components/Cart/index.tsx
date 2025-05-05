import { useSelector, useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../FoodList'
import {
  Botao,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  SideBar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const total = items.reduce((soma, item) => {
    return soma + (item.preco || 0)
  }, 0)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formataPreco(total)}</span>
        </Prices>
        <Botao>Continuar com a entrega</Botao>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
