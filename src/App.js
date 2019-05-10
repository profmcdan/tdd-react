import React from "react";
import "./app.scss";
import Header from "./components/layout/header/Header";
import Headline from "./components/headline/Headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="CLick the button to render" />
      </section>
    </div>
  );
}

export default App;
