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
  render(){
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
  
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchNameEntity}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Tutorials List</h4>
        
          <ul className="list-group">
            {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
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
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            
              <Link
                to={"/tutorials/" + currentTutorial.id}
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


