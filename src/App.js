import React from 'react';
import List from './List';

const testArray = [
  {
    text:"Hello"
  },
  {
    text:"bye"
  }
  ,
  {
    text:"okay"
  },
  {
    text:"glory"
  },
  {
    text:"trial"
  },
  {
    text:"training"
  }
]

function App() {
  return (
    <div className="App">
        <List items={testArray}/>
    </div>
  );
}

export default App;
