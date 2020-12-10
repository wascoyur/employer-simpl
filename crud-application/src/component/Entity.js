import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'


export default class Entity extends Component{
  
  constructor(){
    super();
    this.state={
      name:'nameOf',
      id:1,
      parent: 'null',
      children: 'null',
      number: 0,
      stringAtribute: 'str'
    }
  }
  render(){
const {name, id, parent, children, number, stringAtribute} = this.state
return(
<Container>
  <Row>
    <Col>Id</Col>
    <Col>{id}</Col>
  </Row>
  <Row>
    <Col>Name</Col>
    <Col>{name}</Col>
  </Row>
  <Row>
    <Col>Parent</Col>
    <Col>{parent}</Col>
  </Row>
  <Row>
    <Col>Children</Col>
    <Col>{children}</Col>
  </Row>
  <Row>
    <Col>Number</Col>
    <Col>{number}</Col>
  </Row>
  <Row>
    <Col>String Attribute</Col>
    <Col>{stringAtribute}</Col>
  </Row>
</Container>
)
  }
}