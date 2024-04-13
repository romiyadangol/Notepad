import Nav from "./components/Nav";
import TextForm from "./components/TextForm";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav title="Notepad"/>
        <TextForm/>
      </div>
    );
  }
}
export default App;
