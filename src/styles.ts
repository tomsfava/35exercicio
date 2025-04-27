import { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  branco: '#FFF8F2',
  rosaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${cores.salmao}
  }

  body {
    background-color: ${cores.branco}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
