import React from 'react';
import './app.scss';
import Configurator from './Configurator';

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto min-h-screen">
        <div className="flex pt-40 pb-10 h-screen">
          <div className="flex-none self-start" style={{ width: '300px' }}>
            <Configurator />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
