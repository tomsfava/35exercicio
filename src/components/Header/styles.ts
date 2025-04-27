import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  height: 186px;
  background-color: ${cores.rosaClaro};

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
`

export const Logo = styled.a`
  padding-top: 64px;
`

export const HeaderLink = styled(Link)`
  padding-top: 82px;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`

export const HeaderLinkB = styled.a`
  padding-top: 82px;
  justify-self: end;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
`
