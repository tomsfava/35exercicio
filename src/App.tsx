import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'

import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
