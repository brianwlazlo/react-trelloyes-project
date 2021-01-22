import React, { Component } from 'react';
import './app.css';
import List from './list';
import STORE from './store';



class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {STORE.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

/* --- my starter code ---
function App(STORE) {
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        <List
          key = 
          header = {list.header}
          cards =  />
      </div>
    </main>
  );
}
*/

export default App;
