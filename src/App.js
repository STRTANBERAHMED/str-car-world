import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/home/Explore/Explore';
import Home from './components/home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/shared/Footer/Footer';
import Appbar from './components/shared/navbar/Appbar/Appbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar></Appbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
