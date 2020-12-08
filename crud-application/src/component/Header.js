import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

export default class Header extends Component{
render(){
return(
  <Navbar navbar="expand"  bg="dark">
    <Nav.Item>
        <Nav.Link>Entity List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Entity Add</Nav.Link>
      </Nav.Item>
      <Nav.Item>
    <Nav.Link>Entity Redo</Nav.Link>
                </Nav.Item>   
  </Navbar>
  )
}
}