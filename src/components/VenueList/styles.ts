import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
`

export const ListItem = styled.li`
  height: 400px;
  border: solid 1px ${cores.salmao};
`
