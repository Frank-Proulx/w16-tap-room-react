import React from 'react';
import Header from './Header'
import KegControl from './KegControl'

function App(){
  return (
    <React.Fragment>
      <div className="container">
      <Header />
      <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
