import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import CallBack from "./components/CallBack";

class App extends React.Component {
  render(){
    let mainComponent="";
    switch(this.props.location){
      case "":
        mainComponent=<Main {...this.props}/>
        break;
      case "callback":
        mainComponent=<CallBack/>
        break;
      case "secret":
        mainComponent= this.props.auth.isAuthenticated()?<Secret {...this.props}/>:<NotFound/>;
        break;
      default:
        mainComponent=<NotFound/>;
    }
  return (
    <div className="App">
      {mainComponent}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React, {this.props.name}</h1>
      </header>
    </div>
  );
}
}

export default App;
