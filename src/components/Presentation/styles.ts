import styled from 'styled-components'

export const Imagem = styled.div`
  height: 280px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 32px;
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Type = styled.h2`
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  color: #fff;
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 100%;
  color: #fff;
`
