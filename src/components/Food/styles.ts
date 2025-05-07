import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  width: 100%;
  height: 100%;
  min-height: 340px;
  font-size: 14px;
  padding: 8px;
`

export const Foto = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 304 / 167;
  object-fit: cover;
`

export const Titulo = styled.h3`
  color: ${cores.branco};
  font-weight: 900;
  font-size: 16px;
  padding: 7px 0;
`

export const Descricao = styled.p`
  color: ${cores.branco};
  font-weight: 400;
  padding-bottom: 7px;
  line-height: 22px;
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  font-weight: 700;
  background-color: ${cores.branco};
  color: ${cores.salmao};
  border: none;
  padding: 4px 0;
`
