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
      <Container xs={4}>
        <div>
          <Entity
            addItem = { this.props.addItem }
          />
    
          <div className="form-group">
            <label htmlFor="title"></label>
            {/*<input*/}
            {/*  type="text"*/}
            {/*  className="form-control"*/}
            {/*  id="title"*/}
            {/*  required*/}
            {/*  value={this.state.title}*/}
            {/*  onChange={this.onChangeTitle}*/}
            {/*  name="title"*/}
            {/*/>*/}
          </div>
          <div className="form-group">
            <Button
              disabled
            >{ this.props.countItem } Элементов в базе
            </Button>
          </div>
    
          {/*<div className="form-group">*/}
          {/*  <Button*/}
          {/*    variant="primary"*/}
          {/*    size="sm"*/}
          {/*    onClick ={ ()=>{this.props.addItem(this.state.entity)} }*/}
          {/*  >Добавить сущность в список</Button>*/}
          {/*</div>*/}
  
  
        </div>
      </Container>
      
    )
  }
}