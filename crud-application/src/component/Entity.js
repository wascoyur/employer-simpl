import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import GetlistService from '../services/dao-service'

export default class Entity extends Component {
	state = {
		name: 'curent_Name',
		id: 0,
		parent: null,
		children: null,
		number: 0,
		stringAtribute: '',
  };
  
  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeParent(e) {
    this.setState({
      parent: e.target.value
    });
  }
	
	onChangeChildren(e) {
		this.setState({
			children: e.target.value
		});
	}
	onChangeStringAtribute(e) {
		this.setState({
			stringAtribute: e.target.stringAtribute
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
								id="description"
								required
								value={this.state.stringAtribute}
								onChange={this.onChangeStringAtribute}
								name="stringAtribute"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Родительский элемент</label>
							<input
								type="text"
								className="form-control"
								id="parent"
								//required
								value={this.state.parent}
								onChange={this.onChangeParent}
								name="parent"
							/>
						</div>
						
						
						<button onClick={this.saveTutorial} className="btn btn-success">
							Отправить в БД
						</button>
					</div>
				)}
			</div>
		);
	}
}
