import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, LogIn, SignUp } from "./pages"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/project1">
          <Home />
        </Route>
        <Route path="/project1/signup">
          <SignUp />
        </Route>
        <Route path="/project1/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
