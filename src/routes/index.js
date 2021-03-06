import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import RegisterPage from "../pages/RegisterPage";
import UpdatePage from "../pages/UpdatePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/update/:id" component={UpdatePage} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
