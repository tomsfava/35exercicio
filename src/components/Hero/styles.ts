import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroBar = styled.header`
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  background-color: ${cores.rosaClaro};
`

export const HeroText = styled.p`
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  color: ${cores.salmao};
  max-width: 540px;
  text-align: center;
`
