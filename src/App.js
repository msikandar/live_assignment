import "./App.css";
import { Button } from "antd";
import { Route, Switch } from "react-router-dom";
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
        component={(props) => <Home {...props} user={user} />}
      />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
