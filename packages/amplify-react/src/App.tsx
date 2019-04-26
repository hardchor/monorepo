import React, { Component, ChangeEvent } from 'react';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import awsmobile from './aws-exports';
import './App.css';

Amplify.configure(awsmobile);

Storage.configure({ level: 'private' });

const listTodos = `query listTodos {
  listTodos {
    items {
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name: String! $description: String!) {
  createTodo(input: {
    name: $name
    description: $description
  }) {
    id
    name
    description
  }
}`;

class App extends Component {
  uploadFile = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) return;

    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    });
  };

  todoMutation = async () => {
    const todoDetails = {
      name: 'Party tonight!',
      description: 'Amplify CLI rocks!',
    };

    const newEvent = await API.graphql(graphqlOperation(addTodo, todoDetails));
    alert(JSON.stringify(newEvent));
  };

  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    alert(JSON.stringify(allTodos));
  };

  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }

  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />

        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>

        <S3Album level="private" path="" />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
