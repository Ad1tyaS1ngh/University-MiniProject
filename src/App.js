import React from "react";
// Aditya Singh 22BCE0841

import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,

} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
