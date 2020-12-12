import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Entity extends Component {
	state = {
		template: {
			name: [
				'Этот',
				'подход',
				'будет',
				'работать',
				'для',
				'конкретного',
				'случая',
			],
			id: 1,
			parent: 'null',
			children: 'null',
			number: 0,
			stringAtribute: 'str',
		},
		current: {
			name: 'curName',
			id: 0,
			parent: null,
			children: null,
			number: 0,
			stringAtribute: '',
		},
  };
  
  onChangeName = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
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
		} = this.state.current;
		return (
			<Form>
				<Form.Group>
					<Form.Label>Name: {name} </Form.Label>
					<Form.Control onChange={this.changeControl()} />
				</Form.Group>
			</Form>
		);
	}
}
