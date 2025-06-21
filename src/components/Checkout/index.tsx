import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik, FormikProvider, Form, Field } from 'formik'
import * as Yup from 'yup'
import { clear, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/checkout'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import CheckoutContent from '../CheckoutContent'
import { Botao, CheckoutContainer, Overlay, SideBar } from './styles'
import { formataPreco } from '../FoodList'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
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

  const closeCheckOpenCart = () => {
    closeCheckout()
    openCart()
  }

  const total = items.reduce((soma, item) => {
    return soma + (item.preco || 0)
  }, 0)

  const formik = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <SideBar>
        {isSuccess && data ? (
          <CheckoutContent title={`Pedido realizado = ${data.orderId}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.{' '}
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          </CheckoutContent>
        ) : (
          <FormikProvider value={formik}>
            <Form>
              {step === 1 && (
                <CheckoutContent title="Entrega">
                  <>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <Field name="receiver" id="receiver" />
                    <label htmlFor="description">Endereço</label>
                    <Field name="description" id="description" />
                    <label htmlFor="city">Cidade</label>
                    <Field name="city" id="city" />
                    <label htmlFor="zipCode">CEP</label>
                    <Field name="zipCode" id="zipCode" />
                    <label htmlFor="number">Número</label>
                    <Field name="number" id="number" />
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <Field name="complement" id="complement" />
                    <Botao type="button" onClick={() => setStep(2)}>
                      Continuar com o pagamento
                    </Botao>
                    <Botao type="button" onClick={closeCheckOpenCart}>
                      Voltar para o carrinho
                    </Botao>
                  </>
                </CheckoutContent>
              )}
              {step === 2 && (
                <CheckoutContent
                  title={`Pagamento - Valor a pagar ${formataPreco(total)}`}
                >
                  <>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <Field name="cardName" id="cardName" />
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <Field name="cardNumber" id="cardNumber" />
                    <label htmlFor="cardCode">CVV</label>
                    <Field name="cardCode" id="cardCode" />
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <Field name="expiresMonth" id="expiresMonth" />
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <Field name="expiresYear" id="expiresYear" />
                    <Botao type="submit">Finalizar pagamento</Botao>
                    <Botao type="button" onClick={() => setStep(1)}>
                      Voltar para a edição de endereço
                    </Botao>
                  </>
                </CheckoutContent>
              )}
            </Form>
          </FormikProvider>
        )}
      </SideBar>
    </CheckoutContainer>
  )
}

export default Checkout
