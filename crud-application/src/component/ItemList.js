import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import GetlistService from '../services/dao-service'

export default class ItemList extends Component{
  
    state = {
      entityList:[],
      currentEntity: null,
      currentIndex: -1,
      searchNameEntity:''
    }
    
    componentDidMount = ()=> {
      this.retriveEntitys();
    }
  
    retriveEntitys=()=>{
      GetlistService.getAll()
        .then(response =>{
          this.setState({
            entityList:response.data
          });
          console.log('response.data:',response.data)
        })
    }
    refreshList(){
      this.retriveEntitys();
      this.setState({
        currrentEntity: null,
        currentIndex: -1
      })
    }
  setActiveEntity(entity, index) {
    this.setState({
      currentEntity: entity,
      currentIndex: index
    });
  }
  removeAllEntitys() {
    GetlistService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchNameEntity() {
    GetlistService.findByTitle(this.state.searchNameEntity)
      .then(response => {
        this.setState({
          entityList: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  onChangeSearchName(e){
      const  searchName = e.target.value;
      this.setState({
        searchNameEntity:searchName
      })
  }
  render(){
    const {searchNameEntity, entityList, currentEntity, currentIndex } = this.state;
    const {entity} = this.props
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Искать по имени.."
              value={searchNameEntity}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchNameEntity}
              >
                Поиск сущности
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Список сущностей в БД:</h4>
        
          <ul className="list-group">
            {entityList &&
            entityList.map((entityList, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTutorial(entityList, index)}
                key={index}
              >
                {entityList.name}
              </li>
            ))}
          </ul>
        
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          <h4>Список сущностей на клиенте:</h4>
        
          <ul className="list-group">
            {entity &&
            entity.map((item, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTutorial(item, index)}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        
          {/*<button*/}
          {/*  className="m-3 btn btn-sm btn-danger"*/}
          {/*  onClick={this.removeAllTutorials}*/}
          {/*>*/}
          {/*  Remove All*/}
          {/*</button>*/}
        </div>
        <div className="col-md-6">
          {currentEntity ? (
            <div>
              <h4>Сущьность</h4>
              <div>
                <label>
                  <strong>Имя сущьности:</strong>
                </label>{" "}
                {currentEntity.name}
              </div>
              <div>
                <label>
                  <strong>searchNameEntity</strong>
                </label>{" "}
                {currentEntity.searchNameEntity}
              </div>
              <div>
                <label>
                  <strong>Статус:</strong>
                </label>{" "}
                {currentEntity.published ? "Published" : "Pending"}
              </div>
            
              <Link
                to={"/list/" + currentEntity.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}


