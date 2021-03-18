import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import counters from "./components/counters";
import userData from "./components/userData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Auth: true };
    const prop = props;
  }
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => {
      <Route {...rest} render={(props) => (this.state.Auth === true ? <component {...props} /> : <Redirect to="/" />)} />;
    };

    return (
      <React.Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={counters} />
            <PrivateRoute exact path="/user" component={userData} />

            <Route path="*" render={() => <h1 className="text-center mt-4 text-danger">Error 404.</h1>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
