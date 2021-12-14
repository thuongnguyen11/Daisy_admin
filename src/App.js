import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

import Login from "./pages/Login";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";
import Dishes from "./pages/Dishes";
import CreateDish from "./pages/CreateDish";
import DishDetails from "./pages/DishDetails";
import CategoryDetails from "./pages/CategoryDetails";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />

        <PrivateRoute>
          <Layout>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/orders'} component={Orders} />
            <Route exact path={'/orders/:id'} component={OrderDetails} />
            <Route exact path={'/categories'} component={Categories} />
            <Route exact strict path={'/categories/create/'} component={CreateCategory} />
            <Route exact strict path={'/categories/:id'} component={CategoryDetails} />
            <Route exact path={'/dishes'} component={Dishes} />
            <Route exact strict path={'/dishes/create/'} component={CreateDish} />
            <Route exact strict path={'/dishes/:id'} component={DishDetails} />
          </Layout>
        </PrivateRoute>

      </Switch>
    </Router>
  );
};


export default App;