import React from "react";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/background.JPG')`,
        backgroundSize: "cover",
        overflow: "scroll",
        height: "100vh",
      }}
    >
      <Header />
      <div className="page">
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <About />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
