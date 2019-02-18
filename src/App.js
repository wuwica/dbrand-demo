import React, { Component } from "react";
import logo from "./logo.png";
import full from "./full.png";
import cart from "./cart.svg"
import menu from "./menu.svg"
import "./App.css";

var skinMapping = [
  {
    'catagory':"Matrix",
    'skins':[
      {"fileName":"matrix-black.png","name":"Black Matrix"}
    ]
  },
  {
    'catagory':"Camo",
    'skins':[
      {"fileName":"camo-black.png","name":"Black Camo"}
    ]
  },
  {
   'catagory':"Carbon Fiber",
   'skins':[
      {"fileName":"carbon-black.png","name":"Black Carbon"},
      {"fileName":"carbon-gray.png","name":"Gray Carbon"},
      {"fileName":"carbon-white.png","name":"White Carbon"},
      {"fileName":"carbon-red.png","name":"Red Carbon"},
      {"fileName":"carbon-orange.png","name":"Orange Carbon"},
      {"fileName":"carbon-yellow.png","name":"Yellow Carbon"},
      {"fileName":"carbon-green.png","name":"Green Carbon"},
      {"fileName":"carbon-blue.png","name":"Blue Carbon"},
      {"fileName":"carbon-purple.png","name":"Purple Carbon"}
    ]
  },
  {
   'catagory':"Dragon",
    'skins':[
      {"fileName":"dragon-black.png","name":"Black Dragon"},
      {"fileName":"dragon-red.png","name":"Red Dragon"}
    ]
  },
  {
   'catagory':"Stone",
   'skins':[
      {"fileName":"marble-black.png","name":"Black Marble"},
      {"fileName":"marble-white.png","name":"Red Marble"},
      {"fileName":"stone-concrete.png","name":"Concrete"}
    ]
  },
  {
   'catagory':"Matte",
    'skins':[
      {"fileName":"matte-black.png","name":"Matte Black"},
      {"fileName":"matte-white.png","name":"Matte white"}
    ]
  },
  {
   'catagory':"Metal",
   'skins':[
      {"fileName":"metal-hyperblack.png","name":"Hyperblack Titanium"},
      {"fileName":"metal-regular.png","name":"Titanium"},
      {"fileName":"metal-copper.png","name":"Copper"},
      {"fileName":"metal-gold.png","name":"Gold"}
    ]
  },
  {
   'catagory':"Leather",
    'skins':[
      {"fileName":"leather-black.png","name":"Black Leather"},
      {"fileName":"leather-white.png","name":"White Leather"}
    ]
  },
  {
   'catagory':"True Color",
   'skins':[
      {"fileName":"tc-blue.png","name":"blue"},
      {"fileName":"tc-green.png","name":"green"},
      {"fileName":"tc-yellow.png","name":"yellow"},
      {"fileName":"tc-orange.png","name":"orange"},
      {"fileName":"tc-red.png","name":"red"},
      {"fileName":"tc-purple.png","name":"purple"}
    ]
  },
  {
   'catagory':"Wood",
   'skins':[
      {"fileName":"wood-bamboo.png","name":"Mahogany"},
      {"fileName":"wood-mahogany.png","name":"Bamboo"},
      {"fileName":"wood-zebra.png","name":"Zebra"}
    ]
  },
];
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

class Catagories extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Skin-Catagories">
        <div className="Catagories-Padding">
          {this.props.skinMapping.map((catagory,i) => {
            return(
              <Catagory key={i} clickSkin={this.props.clickSkin} skins={catagory}/>
            );
          })}
        </div>
      </div>
    );
  }

}

class Catagory extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="Catagory-Wrapper">
        <h5>{this.props.skins.catagory} //</h5>
        <div className="Catagory">
          <div className={"Catagory-Content"}>
            {this.props.skins.skins.map((skin,i) => {
              return(
                <Skin_Button key={i} clickSkin={this.props.clickSkin} skin={skin}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

class Skin_Button extends Component{
  constructor(props){
    super(props);
  }
  
  click = () => {
    this.props.clickSkin(this.props.skin);
  }

  render(){
    const skinImage = require("./tiles/"+this.props.skin.fileName);
    return(
      <div className={"Button-Wrapper"}>
        <input type={"radio"} name="skinButtons" onClick={this.click} id={this.props.skin.name}>
        </input>  
        <label for={this.props.skin.name} className={"Skin-Button "} style={{backgroundImage: "url(" + skinImage+ ")"}}></label>
        <div className={"Circle-Select "}>
        </div>
      </div>
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

class Phone extends Component{
  constructor(props){
    super(props);
    this.state ={
      opacity:0,
      prevSkin:""
    }
  }

  click = ({target:img}) => {
    this.props.onImgLoad(img.offsetHeight);
  }
  currentLoaded = ({target:e}) => {
    this.setState({
      opacity:1,
    })
    e.addEventListener("transitionend", (event) => {
      this.setState({
        opacity:0,
        prevSkin:`./skins/${this.props.selectedSkins.fileName}`
      })
    }, false);
  }

  render(){
    var top = (this.props.showHide=="Active") ? (this.props.yScroll  - 40) : 0;
    var curSkin = this.props.selectedSkins.fileName ?`./skins/${this.props.selectedSkins.fileName}`:""
    return(
      <div className={"Inner-Phone " + this.props.showHide} style={{top:top}}>
        <div className={"Phone-Image-Wrapper"}>
          <img src={full} onLoad={this.click} className="Inner-Phone-Image"></img>
          <div className={"Phone-Skin"}>
            <img className={"Phone-Skin-Image-Prev"} src={this.state.prevSkin} />
          </div>
          <div className={"Phone-Skin"}>
            <img className={"Phone-Skin-Image"} style={{opacity:this.state.opacity}} onLoad={this.currentLoaded} src={curSkin} />
          </div>
        </div>
      </div>
    );
  }
}

class PhoneSidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className={"Sidebar "+this.props.showHide} > 
          <div className={"Sidebar-Triangle"}></div>
            <Catagories clickSkin={this.props.clickSkin} skinMapping={skinMapping}/>
          <div className={"Catagories-Overlay"}></div>
        </div>
    );
  }
}

class PickASkin extends Component{
  click = () => {
    this.props.toggleSidenav();
  }
  render(){
    return(
        <div className="Product-Options">
          <div className="Label"><span>Texture</span></div>
          <div onClick={this.click} className="Button">Pick A Skin</div>
        </div>
      );
  }
}

class PageOverlay extends Component{
  click = () => {
    this.props.toggleSidenav();
  }
  render(){
    return(
        <div onClick={this.click} className={"Page-Overlay " + this.props.showHide}>
        </div>
      );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight:0,
      showHideSidenav:"Hidden",
      yScroll:0,
      selectedSkin:"",
      previousSkin:"",
    }
    this.myRef = React.createRef();
  }

  onImgLoad = (img) => {
    this.setState({imgHeight:img})
  }
  toggleSidenav = () => {
    var css = (this.state.showHideSidenav === "Hidden") ? "Active" : "Hidden";
    var y = 0;
    if (this.myRef.current){y = (this.myRef.current.scrollTop);}
    this.setState({
      "showHideSidenav":css,
      "yScroll":y
    });
  }

  clickSkin = (skin) =>{
    var prevSkin = this.state.selectedSkin
    this.setState({
      "selectedSkin":skin,
      "previousSkin":prevSkin
    });
  }

  render() {
    return (
      <div className="Phone-Border">
        <div className="Phone-Base">
          <div className="Phone-Wrapper">
            <PhoneSidebar clickSkin = {this.clickSkin} showHide={this.state.showHideSidenav}/>   
            <div className="App" id="app" ref={this.myRef}>
              <L_Header />
              <Title />
              <div className="Phone-Picker" style={{height: 'calc(' + (this.state.imgHeight + "px + 1.7em + 1.7em)")}}>
              <Phone 
                showHide={this.state.showHideSidenav} 
                yScroll={this.state.yScroll} 
                onImgLoad={this.onImgLoad}
                selectedSkins={this.state.selectedSkin}
                previousSkins={this.state.previousSkin}
              />
              </div>
              <PickASkin toggleSidenav={this.toggleSidenav} />
            </div>
            <PageOverlay toggleSidenav={this.toggleSidenav} showHide= {this.state.showHideSidenav}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
