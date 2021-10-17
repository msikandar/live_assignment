import "./App.css";
import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.loginData);
  return (
    // <div>
    //   <Button type="primary">Primary Button</Button>
    // </div>
    <Switch>
      <Route
        exact
        path="/"
        // component={
        //   user.email != undefined
        //     ? (props) => <Home {...props} user={user} />
        //     : Signin
        // }
        render={(props) => {
          return user.email !== undefined ? (
            <Home {...props} user={user} />
          ) : (
            <Redirect to="/signin" />
          );
        }}
      />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
