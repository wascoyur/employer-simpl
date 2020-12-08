import React, {Component} from 'react'
import { Navbar, Nav, }  from 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom'
import Header from './component/Header'

export default class App extends Component{
render(){
  return (
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
        
    );
}
  
}
