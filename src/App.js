import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Product from './components/Product'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={Product} />
    </Switch>
  </BrowserRouter>
)

export default App
