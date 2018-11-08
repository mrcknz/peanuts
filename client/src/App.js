import React, { Component } from 'react';
import EntryForm from './components/entry.form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="entry" style={{ display: 'inline-block', overflow: 'scroll hidden', width: '100vw' }}>
          <EntryForm />
          <EntryForm />
        </section>
      </div>
    );
  }
}

export default App;
