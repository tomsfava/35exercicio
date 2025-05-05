import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

export const ListItem = styled.li`
  height: auto;
  border: solid 1px ${cores.salmao};
`
