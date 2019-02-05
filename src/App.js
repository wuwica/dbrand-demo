import React, { Component } from "react";
import logo from "./logo.png";
import cart from "./cart.svg"
import menu from "./menu.svg"
import "./App.css";

class L_Header extends Component{
  render(){
    return(
      <div className="L-Header">
        <img src={menu} className="Header-Icons" alt="menu" /> 
        <img src={logo} className="Dbrand-logo" alt="logo" /> 
        <img src={cart} className="Header-Icons" alt="cart" />
      </div>
    );
  }
}

class Title extends Component{
  render(){
    return(
      <h2 className="Product-Title">
        <div className="inner">iPhone XS Skins & Wraps</div>
      </h2>
    );
  }
}

class Skin_Button extends Component{
  render(){
    return(
      <div className="skin-button" style={{background: this.props.stickerImage}} >

      </div>
    );    
  }
}

class Catagory extends Component{
  create_children(){
    var children =[];
    this.props.colourOptions.foreach((e) => {
      children.push(<Skin_Button stickerImage={e}/>)
    });
  }
  render(){
    return(
      <div> f </div>
    );
  }
}

class Selector extends Component{
  render(){
    return(
      <div></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="Phone-Border">
        <div className="Phone-Base">
          <div className="App">
            <L_Header />
            <Title />
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
