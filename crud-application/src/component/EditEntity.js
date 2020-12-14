import React, { Component } from "react";
import Entity from "./Entity";
import {Container} from 'react-bootstrap'

export default class EditEntity extends Component{
  render(){
    return(
      <Container>
        <Entity/>
      </Container>
    )
  }
}