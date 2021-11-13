import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/home/Explore/Explore';
import Home from './components/home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/shared/Footer/Footer';
import Login from './components/login/Login/Login';
import Register from './components/login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import AddService from './components/admin/AddService/AddService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrders from './components/PlaceOrders/PlaceOrders';
import MyOrders from './components/MyOrders/MyOrders';
import AdminDashboard from './components/admin/AdminDashboard/AdminDashboard';
import Appbar from './components/shared/navbar/Appbar/Appbar';

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
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrders/:productId">
              <PlaceOrders></PlaceOrders>
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
