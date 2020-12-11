import React, {Component} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Entity from './Entity'

export default class AddEntity extends Component{
  state = {
    entity: Entity,
    countEntity: 0
  }
  render(){
    const{entity, countEntity} = this.state
  return(
    <Container>
      <Row>
        <Col>
          <Entity/>
        </Col>       
        <Col>
          <Button
          disabled
          >{ this.props.countItem }</Button>
        </Col>
        
      </Row>
      <Row>
        
      </Row>
<Button
  variant="primary"
  size="sm"
  onClick ={ ()=>{this.props.addItem(this.state.entity)} }
  >Добавить сущность в список</Button>
</Container>
)
  }
}