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
          <div className="row">
            <div className="col-2 nopadding">
              <NavBar {...props} />
            </div>
            <div className="col-10 app-info">
              <Component {...props} />
            </div>
          </div>
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
