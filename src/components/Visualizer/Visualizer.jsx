import React from 'react';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { array } = this.props;
    const sideMargin =
      array.length > 150
        ? 0.1
        : array.length > 100
        ? 0.15
        : array.length > 75
        ? 0.2
        : array.length > 50
        ? 0.25
        : array.length > 25
        ? 0.3
        : 0.5;
    const labelSize =
      array.length > 40
        ? 'hidden'
        : array.length >= 32
        ? 'text-xs'
        : array.length >= 24
        ? 'text-sm'
        : array.length >= 16
        ? 'text-base'
        : array.length >= 8
        ? 'text-lg'
        : 'text-xl';

    return (
      <div className="flex justify-center items-end w-full h-full pr-8">
        {array.length
          ? array.map((item, index, arr) => (
              <div
                className="bg-blue-500 relative"
                style={{
                  width: `${200 / array.length}%`,
                  maxWidth: '10%',
                  height: `${item}%`,
                  margin:
                    index === 0
                      ? `0 ${sideMargin * 10}px 0 0`
                      : index == arr.length - 1
                      ? `0 0 0 ${sideMargin * 10}px`
                      : `0 ${sideMargin * 10}px`,
                }}
                key={index}
              >
                <span
                  className={`w-full text-center inline-block absolute inset-x-0 bottom-0 leading-8 -mb-8 ${labelSize}`}
                >
                  {item}
                </span>
              </div>
            ))
          : 'Loading ...'}
      </div>
    );
  }
}

export default Visualizer;
