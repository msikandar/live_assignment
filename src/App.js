import "./App.css";
import { Button } from "antd";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    // <div>
    //   <Button type="primary">Primary Button</Button>
    // </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
