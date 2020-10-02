import React from 'react';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center items-end w-full h-full">
        <div
          className="bg-blue-500 text-white flex flex-col"
          style={{ width: '10%', height: '90%', margin: '0 1%' }}
        >
          <span className="self-center my-2 text-lg">90</span>
        </div>
        <div
          className="bg-blue-500 text-white flex flex-col"
          style={{ width: '10%', height: '33%', margin: '0 1%' }}
        >
          <span className="self-center my-2 text-lg">33</span>
        </div>
        <div
          className="bg-blue-500 text-white flex flex-col"
          style={{ width: '10%', height: '72%', margin: '0 1%' }}
        >
          <span className="self-center my-2 text-lg">72</span>
        </div>
        <div
          className="bg-blue-500 text-white flex flex-col"
          style={{ width: '10%', height: '8%', margin: '0 1%' }}
        >
          <span className="self-center my-2 text-lg">8</span>
        </div>
      </div>
    );
  }
}

export default Visualizer;
