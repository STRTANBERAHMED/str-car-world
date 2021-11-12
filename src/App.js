import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/home/Explore/Explore';
import Home from './components/home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/shared/Footer/Footer';
import Appbar from './components/shared/navbar/Appbar/Appbar';
import Login from './components/login/Login/Login';
import Register from './components/login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import AddService from './components/AddService/AddService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
