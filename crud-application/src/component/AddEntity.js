import React, {Component} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Entity from './Entity'

export default class AddEntity extends Component{
  state = {
    entity: Entity
  }
  render(){
    const{entity} = this.state
  return(
    <Container>
      <Row>
        <Col>
          <Entity/>
        </Col>
        <Col>
          <Button
            variant="primary"
            size="sm"
            onClick ={ ()=>{this.props.addItem(this.state.entity)} }
            >Добавить сущность в список</Button>
        </Col>
        
      </Row>
      <Row>
        
      </Row>

</Container>
)
  }
}