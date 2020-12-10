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
addItem = (item)=>{
  if (item) {
    this.setState((state) =>{
      return(state.entity.push(item))
    })
  }
}
render(){
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>      
        <Route path = "/" component = {ItemList} exact/>
        <Route
          path = "/edit"
          render = {(props) => (
          <EditEntity {...props} />) }
         />
        <Route
        path = "/add"
        render = { (props) => (
          <AddEntity {...props} addItem = { this.addItem}  /> 
          )}        
        />
      </BrowserRouter>
    </Fragment>
    );
}
  
}
