import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './component/Header'
import ItemList from './component/ItemList';
import EditEntity from './component/EditEntity';
import AddEntity from './component/AddEntity'
import Entity from './component/Entity'


export default class App extends Component{
state = {
entity: []
}
entityCount = ()=>{  
  const {entity} = this.state
  return(
    entity.length
  )
}
  addItem = (item)=>{
    const { entity } = this.state
    const isExsist = entity.filter(e => e.name == item.name)
    if (isExsist.length >0)return
    this.setState((state) =>{
      return(state.entity.push(item))
    })
}
  
  render(){
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>      
        <Route
          path = "/list"
          render = {(props)=>(
            <ItemList  entity = {this.state.entity}/>
          )}
          exact/>
          <Route
          path = "/list/:id"
          render = {(props)=>(
            <Entity  entity = {this.state.entity}/>
          )}
          exact/>
        <Route
          path = "/edit"
          render = {(props) => (
          <EditEntity {...props} />) }
         />
        <Route
        path = "/add"
        render = { (props) => (
          <AddEntity
          addItem = { this.addItem }
          countItem={this.entityCount()} /> 
          )} 
          exact       
        />
      </BrowserRouter>
    </Fragment>
    );
}
  
}
