import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik, FormikProvider, Form } from 'formik'
import * as Yup from 'yup'
import { clear, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/checkout'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import CheckoutContent from '../CheckoutContent'
import {
  Botao,
  BotaoGroup,
  CheckoutContainer,
  Overlay,
  SideBar,
  StyledInput,
  InputGroup,
  DInputGroup
} from './styles'
import { formataPreco } from '../FoodList'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, reset }] = usePurchaseMutation()
  const [step, setStep] = useState(1)

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
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
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
    },
    enableReinitialize: true
  })

  const openCart = () => {
    dispatch(open())
  }

  const closeCheckout = () => {
    dispatch(close())
  }

  const conclude = () => {
    dispatch(clear())
    closeCheckout()
    reset()
    formik.resetForm()
    setStep(1)
  }

  const closeCheckOpenCart = () => {
    closeCheckout()
    openCart()
  }

  const total = items.reduce((soma, item) => {
    return soma + (item.preco || 0)
  }, 0)

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckout} />
      <SideBar>
        {isSuccess && data ? (
          <CheckoutContent title={`Pedido realizado - ${data.orderId}`}>
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
              <BotaoGroup>
                <Botao type="button" onClick={conclude}>
                  Concluir
                </Botao>
              </BotaoGroup>
            </>
          </CheckoutContent>
        ) : (
          <FormikProvider value={formik}>
            <Form>
              {step === 1 && (
                <CheckoutContent title="Entrega">
                  <>
                    <InputGroup>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <StyledInput name="receiver" id="receiver" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="description">Endereço</label>
                      <StyledInput name="description" id="description" />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <StyledInput name="city" id="city" />
                    </InputGroup>
                    <DInputGroup>
                      <InputGroup>
                        <label htmlFor="zipCode">CEP</label>
                        <StyledInput name="zipCode" id="zipCode" />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="number">Número</label>
                        <StyledInput name="number" id="number" />
                      </InputGroup>
                    </DInputGroup>
                    <InputGroup>
                      <label htmlFor="complement">Complemento (opcional)</label>
                      <StyledInput name="complement" id="complement" />
                    </InputGroup>
                    <BotaoGroup>
                      <Botao type="button" onClick={() => setStep(2)}>
                        Continuar com o pagamento
                      </Botao>
                      <Botao type="button" onClick={closeCheckOpenCart}>
                        Voltar para o carrinho
                      </Botao>
                    </BotaoGroup>
                  </>
                </CheckoutContent>
              )}
              {step === 2 && (
                <CheckoutContent
                  title={`Pagamento - Valor a pagar ${formataPreco(total)}`}
                >
                  <>
                    <InputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <StyledInput name="cardName" id="cardName" />
                    </InputGroup>
                    <DInputGroup className="c6625">
                      <InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <StyledInput name="cardNumber" id="cardNumber" />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <StyledInput name="cardCode" id="cardCode" />
                      </InputGroup>
                    </DInputGroup>
                    <DInputGroup>
                      <InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <StyledInput name="expiresMonth" id="expiresMonth" />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <StyledInput name="expiresYear" id="expiresYear" />
                      </InputGroup>
                    </DInputGroup>
                    <BotaoGroup>
                      <Botao type="submit">Finalizar pagamento</Botao>
                      <Botao type="button" onClick={() => setStep(1)}>
                        Voltar para a edição de endereço
                      </Botao>
                    </BotaoGroup>
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
