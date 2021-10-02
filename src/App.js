import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Wrapper, Sidediv, Main } from "./App-style";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Wrapper>
      <Sidediv>
        <Sidebar />
      </Sidediv>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Main>
    </Wrapper>
  );
};
export default App;
