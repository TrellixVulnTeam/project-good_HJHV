import 'semantic-ui-css/semantic.min.css'
import Home from './homePage/Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Auction from '../components/auction/Auction';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path={`/auction`}><Auction /></Route>
          <Route path={`/home`}><Home /></Route>
          <Route exact path={`/`}><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
