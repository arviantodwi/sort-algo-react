import React from 'react';
import './range.scss';

class Configurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSortButton: null,
      rangeProgress: 0,
      rangeValue: null,
    };
    this.handleSortButtonClick = this.handleSortButtonClick.bind(this);
    this.handleRangeOnChange = this.handleRangeOnChange.bind(this);
  }

  componentDidMount() {
    this.setState({ activeSortButton: 0 });
    const range = document.querySelector('.configurator-range input[type="range"]');
    range.value = range.min;
    this.setState({ rangeValue: range.value });
  }

  handleSortButtonClick(index) {
    if (index === this.state.activeSortButton && this.state.activeSortButton != null) return;

    this.setState({ activeSortButton: index });
  }

  handleRangeOnChange(event) {
    const rangeProgress = document.querySelector('.configurator-range__progress-track');
    const rangeInput = document.querySelector('.configurator-range input[type="range"]');

    this.setState({
      rangeProgress:
        event.target.value == event.target.min ? 0 : (event.target.value / event.target.max) * 100,
      rangeValue: rangeInput.value,
    });
  }

  setSortButtonClassName(index) {
    const base = 'text-sm font-semibold py-2 px-4 mr-0 odd:mr-2 mb-2 rounded-full';
    const active = 'bg-blue-500 border border-blue-500 text-white opacity-50 cursor-not-allowed';
    const inactive = 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow';

    return base.concat(' ').concat(index === this.state.activeSortButton ? active : inactive);
  }

  render() {
    const sortButtons = ['Bubble', 'Selection', 'Insertion', 'Merge', 'Quick', 'Heap'];

    return (
      <div className="bg-white rounded shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Setup your sort</div>
          <p className="text-gray-700 text-base">
            Pick your prefered sort here. You may also want to adjust the array size.
          </p>
        </div>
        <div className="flex flex-wrap px-6 pt-4 pb-2">
          {sortButtons.map((item, idx) => (
            <button
              className={this.setSortButtonClassName(idx)}
              key={idx}
              disabled={this.state.activeSortButton === idx}
              aria-disabled={this.state.activeSortButton === idx}
              onClick={() => this.handleSortButtonClick(idx)}
            >
              {`${item} Sort`}
            </button>
          ))}
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="configurator-range w-full">
            <div className="text-4xl">
              {this.state.rangeValue}&nbsp;
              <small className="text-base text-gray-700">elements</small>
            </div>
            <div className="configurator-range__container">
              <div
                className="configurator-range configurator-range__progress-track w-full"
                style={{
                  width: `calc(${this.state.rangeProgress}% - ${
                    (12 * this.state.rangeProgress) / 100
                  }px)`,
                }}
              ></div>
              <input
                className="w-full"
                type="range"
                min="4"
                max="256"
                step="4"
                onChange={this.handleRangeOnChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configurator;
