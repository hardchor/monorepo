import React, { Component, ChangeEvent } from 'react';
import Amplify, { Analytics, Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import logo from './logo.svg';
import awsmobile from './aws-exports';
import './App.css';

Amplify.configure(awsmobile);

Storage.configure({ level: 'private' });

class App extends Component {
  uploadFile = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) return;

    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    });
  };

  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }

  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <S3Album level="private" path="" />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
