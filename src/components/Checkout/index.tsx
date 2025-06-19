import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik, FormikProvider, Form, Field } from 'formik'
import { clear, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/checkout'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { Botao, CheckoutContainer, Overlay, SideBar } from './styles'

const Checkout = () => {
  const { items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [step, setStep] = useState(1)

  const openCart = () => {
    dispatch(open())
  }

  const closeCheckout = () => {
    dispatch(close())
  }

  const total = items.reduce((soma, item) => {
    return soma + (item.preco || 0)
  }, 0)

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <SideBar>
        {isSuccess && data ? (

        ) : ()}
        <Botao>Continuar com a entrega</Botao>
      </SideBar>
    </CheckoutContainer>
  )
}

export default Checkout
