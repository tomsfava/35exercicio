import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 80px;
`

export const ListItem = styled.li`
  height: 340px;
  border: solid 1px ${cores.salmao};
`
