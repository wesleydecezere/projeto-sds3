import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch >
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;