import React from "react";
import "./app.scss";
import Header from "./components/layout/header/Header";
import Headline from "./components/headline/Headline";

const tempArr = [
  { fName: "john", lName: "doe", age: 23, onlineStatus: true, id: 1 },
  { fName: "kay", lName: "brunet", age: 23, onlineStatus: false, id: 2 },
  { fName: "mel", lName: "phil", age: 23, onlineStatus: true, id: 1 }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
