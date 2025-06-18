import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.rosaClaro};
  height: 298px;
  margin-top: 120px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Botao = styled.a`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const Logos = styled.div`
  margin-bottom: 80px;

  img {
    margin-left: 8px;
  }
`

export const Mensagem = styled.p`
  font-size: 10px;
  line-height: 100%;
  max-width: 480px;
  text-align: center;
`
