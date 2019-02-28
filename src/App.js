import React, { Component } from "react";
import logo from "./logo.png";
import full from "./full.png";
import cart from "./cart.svg"
import menu from "./menu.svg"
import "./App.css";

var skinMapping = [
  {
    'catagory':"Wood",
    'skins':[
       {"fileName":"wood-mahogany.png","name":"Bamboo"},
       {"fileName":"wood-bamboo.png","name":"Mahogany"},
       {"fileName":"wood-zebra.png","name":"Zebra"}
     ]
   },
  {
   'catagory':"True Color",
   'skins':[
      {"fileName":"matte-black.png","name":"Matte Black"},
      {"fileName":"matte-white.png","name":"Matte white"},
      {"fileName":"tc-blue.png","name":"blue"},
      {"fileName":"tc-green.png","name":"green"},
      {"fileName":"tc-yellow.png","name":"yellow"},
      {"fileName":"tc-orange.png","name":"orange"},
      {"fileName":"tc-red.png","name":"red"},
      {"fileName":"tc-purple.png","name":"purple"}
    ]
  },
  {
   'catagory':"Carbon",
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
   'catagory':"Metal",
   'skins':[
      {"fileName":"metal-hyperblack.png","name":"Hyperblack Titanium"},
      {"fileName":"metal-regular.png","name":"Titanium"},
      {"fileName":"metal-copper.png","name":"Copper"},
      {"fileName":"metal-gold.png","name":"Gold"}
    ]
  },
  {
    'catagory':"Camo",
    'skins':[
      {"fileName":"camo-black.png","name":"Black Camo"}
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
   'catagory':"Stone",
   'skins':[
      {"fileName":"marble-black.png","name":"Black Marble"},
      {"fileName":"marble-white.png","name":"Red Marble"},
      {"fileName":"stone-concrete.png","name":"Concrete"}
    ]
  },{
    'catagory':"Matrix",
    'skins':[
      {"fileName":"matrix-black.png","name":"Black Matrix"}
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
    this.state={
      Active:"",
      left:0,
      top:0,
      selected:""
    }
  }

  catagoryClick = () =>{
    this.setState({
      Active:"Active"
    })
  }

  overlayClick = () =>{
    this.setState({
      Active:""
    })
  }

  singleSkinClick = (e) => {
    this.setState({
      Active:"",
      selected:e
    });
    this.props.clickSkin(e);
  }
  positionClick = ({target:e}) =>{
    var temp = e.offsetParent
    if (e.className == "Skin-Button "){
      this.setState({
        left:temp.offsetLeft,
        top:temp.offsetTop
      })
    }
  }
  render(){
    let catagoryClickFunction;

    if(this.props.skins.skins.length == 1){
      catagoryClickFunction = this.singleSkinClick;
    }else{
      catagoryClickFunction = this.catagoryClick;  
    }
    
    return(
      <div className="Catagory-Wrapper" >
        <h5>{this.props.skins.catagory}</h5>
        <div className="Catagory-Button " onClick={this.positionClick}>
          <Skin_Button 
            buttonType={"catagoryButton"} 
            clickSkin={catagoryClickFunction} 
            skin={this.state.selected? this.state.selected : this.props.skins.skins[0]} 
            ButtonID={this.props.skins.skins[0].name + " Catagory"}
          />
        </div>
        <div className={"Catagory-Button-Screen-Overlay " + this.state.Active} onClick={this.overlayClick}></div>
        <div className={"Catagory " + this.state.Active} style={{top:this.state.top+37.5}}>
          <div className={"Catagory-Content"}>
            {this.props.skins.skins.map((skin,i) => {
              return(
                <Skin_Button 
                  buttonType={"skinButton"}  
                  key={i} 
                  clickSkin={this.singleSkinClick} 
                  skin={skin} 
                  ButtonID={skin.name}
                />
              );
            })}
          </div>
        </div>
        <div className={"Catagory-Triangle " + this.state.Active} style={{top:this.state.top+28,left:this.state.left+22.5} }></div>
        
      </div>
    );
  }
}

class Skin_Button extends Component{
  constructor(props){
    super(props);
  }
  
  click = (e) => {
    this.props.clickSkin(this.props.skin);
    e.stopPropagation();
  }

  render(){
    const skinImage = require("./tiles/"+this.props.skin.fileName);
    return(
      <div className={"Button-Wrapper"}>
        <input type={"radio"} name={this.props.buttonType} onClick={this.click} id={this.props.ButtonID} >
        </input>  
        <label htmlFor={this.props.ButtonID} className={"Skin-Button "} style={{backgroundImage: "url(" + skinImage+ ")"}}></label>
        <div className={"Circle-Select"}>
        </div>
      </div>
    );    
  }
}


class Phone extends Component{
  constructor(props){
    super(props);
    this.state ={
      backOpacity:0,
      cameraOpacity:0,
      prevBackSkin:"",
      prevCameraSkin:""
    }
  }

  loadImg = ({target:img}) => {
    this.props.onImgLoad(img.offsetHeight);
  }

  currentBackLoaded = ({target:e}) => {
    this.setState({
      backOpacity:1,
    })
    e.addEventListener("transitionend", (event) => {
      this.setState({
        backOpacity:0,
        prevBackSkin:`./skins/${this.props.selectedSkins["Back"].fileName}`
      })
    }, false);
  }

  currentCameraLoaded = ({target:e}) => {
    this.setState({
      cameraOpacity:1,
    })
    e.addEventListener("transitionend", (event) => {
      this.setState({
        cameraOpacity:0,
        prevCameraSkin:`./cameraSkins/${this.props.selectedSkins["Camera"].fileName}`
      })
    }, false);
  }

  selectBack =() =>{
    this.props.toggleSidenav();
  }
  
  render(){
    //figure out why it's triggering 3 times every change for some reason.
    var top = (this.props.showHide=="Active") ? (this.props.yScroll  - 40) : 0;
    var curBackSkin = this.props.selectedSkins["Back"].fileName ?`./skins/${this.props.selectedSkins["Back"].fileName}`:""
    var curCameraSkin = this.props.selectedSkins["Camera"].fileName ?`./cameraSkins/${this.props.selectedSkins["Camera"].fileName}`:""
    return(
      <div className={"Inner-Phone " + this.props.showHide} style={{top:top}} onClick={this.selectBack}>
        <div className={"Phone-Image-Wrapper"}>
          <img src={full} onLoad={this.loadImg} className="Inner-Phone-Image"></img>
          <div className={"Phone-Skin"}>
            <img className={"Phone-Skin-Image-Prev"} src={this.state.prevBackSkin} />
          </div>
          <div className={"Phone-Skin"}>
            <img className={"Phone-Skin-Image"} style={{opacity:this.state.backOpacity}} onLoad={this.currentBackLoaded} src={curBackSkin} />
          </div>
          <div className="Camera-Area">
            <div className={"Camera-Skin"}>
              <img className={"Camera-Skin-Image-Prev"} src={this.state.prevCameraSkin} />
            </div>
            <div className={"Camera-Skin"}>
              <img className={"Camera-Skin-Image"}  style={{opacity:this.state.cameraOpacity}} onLoad={this.currentCameraLoaded} src={curCameraSkin} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PhoneSkinTypeSelector extends Component{
  click = (e) =>{
    this.props.changeSkinType(e.target.value);
  }

  render(){
    return(
       <div className={"Skin-Type-Selector"}>
        <div className="Label"><span>Coverage</span></div>
        <div className={"Skin-Type-Wrapper"} onChange={event => this.click(event)}>
          <input type={"radio"} name="skinType" id={"Back"} value="Back" className="Sidebar-Button" defaultChecked ></input>
          <label className={"Skin-Type-Button"} htmlFor={"Back"}><div>Back</div></label>
          <input type={"radio"} name="skinType" id={"Camera"} value="Camera" className="Sidebar-Button"></input>
          <label className={"Skin-Type-Button"} htmlFor={"Camera"}><div>Camera</div></label>
        </div>
      </div>
    );
  }

}

class PhoneSidebar extends Component{
  constructor(props){
    super(props);
  }

  render(){//look into making the "button" more generic
    return(
        <div className={"Sidebar "+this.props.showHide} > 
          <div className={"Sidebar-Triangle "+this.props.showHide}></div>
          <PhoneSkinTypeSelector changeSkinType={this.props.changeSkinType}/>
          <AddToCartButton toggleSidenav={this.props.toggleSidenav}/>
          <Catagories clickSkin={this.props.clickSkin} skinMapping={skinMapping}/>
          <div className={"Catagories-Overlay"}></div>
        </div>
    );
  }
}

class AddToCartButton extends Component{//TODO: Make Buttons More Generic
  constructor(props){
    super(props);
  }
  click = () => {
    this.props.toggleSidenav();
  }
  render(){
    return(
      <div className={"Add-Cart-Button"}>
        <div onClick={this.click} className="Button">Add To Cart</div>
      </div>
    );
  }
}
class PickASkin extends Component{ //TODO: make buttons more generic These componenets can be combined
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
      selectedBackSkin:"",
      previousBackSkin:"",
      selectedCameraSkin:"",
      previousCameraSkin:"",
      skinType:"Back",
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
  changeSkinType = (type) => { 
    if(this.state.skinType != type){
      this.setState({
        skinType:type
      });
    }
  }

  clickSkin = (skin) =>{
    if(this.state.skinType == "Back"){
      var prevSkin = this.state.selectedSkin
      this.setState({
        "selectedBackSkin":skin,
        "previousBackSkin":prevSkin
      });
    }else if (this.state.skinType == "Camera"){
      var prevSkin = this.state.selectedSkin
      this.setState({
        "selectedCameraSkin":skin,
        "previousCameraSkin":prevSkin
      });
    }
  }

  render() {
    return (
      <div className="Phone-Border">
        <div className="Phone-Base">
          <div className="Phone-Wrapper">
            <PhoneSidebar  toggleSidenav={this.toggleSidenav} clickSkin = {this.clickSkin} changeSkinType={this.changeSkinType} showHide={this.state.showHideSidenav}/>   
            <div className="App" id="app" ref={this.myRef}>
              <L_Header />
              <Title />
              <div className="Phone-Picker" style={{height: 'calc(' + (this.state.imgHeight + "px + 1.7em + 1.7em)")}}>
              <Phone 
                showHide={this.state.showHideSidenav} 
                yScroll={this.state.yScroll} 
                onImgLoad={this.onImgLoad}
                selectedSkins={{"Back":this.state.selectedBackSkin,"Camera":this.state.selectedCameraSkin}}
                previousSkins={{"Back":this.state.previousBackSkin,"Camera":this.state.previousCameraSkin}}
                skinType={this.state.skinType}
                toggleSidenav={this.toggleSidenav}
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
