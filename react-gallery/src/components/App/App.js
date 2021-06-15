import { Switch, Route } from 'react-router-dom';

import { GlobalStyle, MainPageStyle } from './StyledApp';
import { About } from '../About';
import { Gallery } from '../Gallery';
import { Contact } from '../Contact';
import { Error404 } from '../Error404';


function App() {
  return (
    <MainPageStyle>
    <GlobalStyle/>
          <Switch>
            <Route exact path="/" component={Gallery}/>
            <Route path="/about"  component={About}/>
            <Route path="/contact"  component={Contact}/>
            <Route component={Error404}/>
          </Switch>
    </MainPageStyle>
  )
}

export default App;