import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./container/HOC/Header";
import Footer from "./container/HOC/Footer";
import Main from "./container/main/Main";
import "./_index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
