import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
import store from './redux/configStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Switch>
        <Route path="/details/:name">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Provider>
);

export default App;
