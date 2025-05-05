import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderLink = styled(Link)`
  padding-top: 82px;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.salmao};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const HeaderLinkB = styled.a`
  padding-top: 82px;
  justify-self: end;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${cores.salmao};
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const HeaderBar = styled.header`
  height: 186px;
  background-color: ${cores.rosaClaro};

  .container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const Logo = styled.a`
  padding-top: 64px;
`
