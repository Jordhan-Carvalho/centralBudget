import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../components/navBar";

const PrivateRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuth ? (
          <React.Fragment>
            <NavBar />
            <Component {...props} />{" "}
          </React.Fragment>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRouter);
