import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import GetlistService from '../services/dao-service'

export default class Entity extends Component {
	state = {
		name: 'curent_Name',
		id: 0,
		parent: null,
		children: [],
		stringAtribute: '',
		timestamp: 0
  };
  resetState(){
  	this.setState({})
	}
  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
			timestamp:this.timestamp()
    });
  }
	timestamp = ()=>{
  	return new Date()
	}
  onChangeParent=(e)=>{
    this.setState({
      parent: e.target.value
    });
  }
	
	onChangeChildren=(e)=>{
		this.setState({
			children: e.target.value
		});
	}
	onChangeStringAtribute=(e)=> {
		this.setState({
			stringAtribute: e.target.value
		});
	}

  saveEntity() {
    var data = {
      name: this.state.name,
			stringAtribute: this.state.stringAtribute
    };
	
		GetlistService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
					stringAtribute: response.data.stringAtribute,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newEntity() {
    this.setState({
      id: null,
      name: "",
			stringAtribute: "",
      published: false,
      submitted: false
    });
  }
  componentDidMount() {
  
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
	}
	
	render() {
		const {
			name,
			id,
			parent,
			children,
			number,
			stringAtribute,
		} = this.state;
		return (
			<div className="submit-form">
				{this.state.submitted ? (
					<div>
						<h4>Сущность отправлена в БД</h4>
						<button className="btn btn-success" onClick={this.newEntity}>
							Add
						</button>
					</div>
				) : (
					<div>
						<div className="form-group">
							<label htmlFor="name">Имя сущности</label>
							<input
								type="text"
								className="form-control"
								id="name"
								required
								value={this.state.name}
								onChange={this.onChangeName}
								name="title"
							/>
						</div>
						
						<div className="form-group">
							<label htmlFor="description">Строковый атрибут</label>
							<input
								type="text"
								className="form-control"
								id="stringAtribute"
								required
								value={this.state.stringAtribute}
								onChange={this.onChangeStringAtribute}
								name="stringAtribute"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="parent">Родительский элемент</label>
							<input
								type="text"
								className="form-control"
								id="parent"
								//required
								value={this.state.parent}
								onChange={this.onChangeParent}
								name="parent"
							/>
						</div><div className="form-group">
							<label htmlFor="children">Дочерние элементы</label>
							<input
								type="text"
								className="form-control"
								id="children"
								//required
								value={this.state.children}
								onChange={this.onChangeChildren}
								name="children"
							/>
						</div><div className="form-group">
							<label htmlFor="timestamp">Время создания</label>
							<input
								type="text"
								className="form-control"
								id="timestamp"
								//required
								value={this.state.timestamp}
								onChange={()=>{
									console.log('redo timestamp???')}}
								name="timestamp"
							/>
						</div><div className="form-group">
							<label htmlFor="id">Номер элемента</label>
							<input
								type="text"
								className="form-control"
								id="id"
								//required
								value={this.state.id}
								onChange={()=>{
									console.log('change id???')}}
								name="id"
							/>
						</div>
						
						<button
							onClick={()=> {
								return (this.props.addItem(this.state))
							}}
							className="btn btn-primary">
							Отправить в БД
						</button>
					</div>
				)}
			</div>
		);
	}
}
