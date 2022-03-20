import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
// import Home from "./Pages/Home";
// import {Pricing} from "./Pages/Pricing";
// import {Contactsales} from "./Pages/Contactsales";
// import {Careers} from "./Pages/Careers";
import {Trackyourshipment} from "./pages/Trackyourshipment";
// import Login from "./Pages/login";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div>
          <Switch>
            {/* <Route path="/" exact component={Home} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/contactsales" exact component={Contactsales} />
            <Route path="/careers" exact component={Careers} /> */}
            <Route path="/trackyourshipment" exact component={Trackyourshipment} />
            {/* <Route path="/login" exact component={Login} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
