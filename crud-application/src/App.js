import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './component/Header'
import ItemList from './component/ItemsList';
import EditEntity from './component/EditEntity';
import AddEntity from './component/AddEntity'


export default class App extends Component{
render(){
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>      
        <Route path = "/" component = {ItemList} exact/>
        <Route path = "/edit" component = {EditEntity} exact/>
        <Route path = "/add" component = {AddEntity} exact/>
      </BrowserRouter>
    </Fragment>
    );
}
  
}
