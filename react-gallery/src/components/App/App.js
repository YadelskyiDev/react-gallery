import { Switch, Route } from 'react-router-dom';

import { Nav } from '../Nav';
import { About } from '../About';
import { Gallery } from '../Gallery';
import { Contact } from '../Contact';
import { Error404 } from '../Error404';
import { GlobalStyle } from './StyledApp';


function App() {
  return (
    <div>
    <GlobalStyle/>
      <Nav/>
          <Switch>
            <Route exact path="/" component={Gallery}/>
            <Route path="/about"  component={About}/>
            <Route path="/contact"  component={Contact}/>
            <Route component={ Error404 }/>
          </Switch>
    </div>
  )
}

export default App;