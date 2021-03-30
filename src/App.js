import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  useLocation,
  withRouter,
  Switch,
} from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const _ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  };
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ScrollToTop>
            <Nav />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </ScrollToTop>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
