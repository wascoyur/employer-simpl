import React from 'react'
import {Conainer, ListGroup} from 'react-bootstrap'

const ItemList = props =>{

  const data= [
    {name:'pet', id:23, stringAttribute:'swe'},
    {name:'mert', id:45, stringAttribute:'swe'}
  ]
  const {entity} = props
  let items = entity.map(item =>{
    return(
      <ListGroup.Item>{item.name}</ListGroup.Item>
    )
  })  
  
  return(
        <ListGroup>
          { items }
        </ListGroup>
    )
}

export default ItemList  

