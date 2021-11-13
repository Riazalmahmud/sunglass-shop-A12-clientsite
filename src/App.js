import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Navigation from "./Pages/Navigation/Navigation";
import Footer from "./Pages/Footer/Footer"
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddAProduct from "./Pages/Dashboard/AddAProduct/AddAProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/MyOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/Dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/MyOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/AddAProduct">
              <AddAProduct></AddAProduct>
            </Route>
            <Route path="/ManageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path="*">
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
