import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Head from './components/Head';
import Details from './components/Details';
import Home from './components/Home';
import Filter from './components/Filter';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Redirect from="/" to="rockets" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
