import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component{
render(){
return(
  <Navbar navbar="expand"  bg="dark">
    <Nav.Item>
        <Link to="/" >Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/list" >Entity List</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/add">Entity Add</Link>
      </Nav.Item>
      <Nav.Item>
    <Link to="/edit">Entity Redo</Link>
                </Nav.Item>   
  </Navbar>
  )
}
}