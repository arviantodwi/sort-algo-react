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
    this.rangeRef = React.createRef();
    this.rangeAttrs = {
      min: 4,
      max: 200,
      step: 4,
    };
    this.handleRandomizeClick = this.handleRandomizeClick.bind(this);
    this.handleAlgoButtonClick = this.handleAlgoButtonClick.bind(this);
    this.handleRangeOnChange = this.handleRangeOnChange.bind(this);
    this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
  }

  componentDidMount() {
    const { setArray, setAlgorithm } = this.props;
    setAlgorithm('bubble');
    setArray(40);

    this.rangeRef.current.value = 40;
    this.setState({
      activeSortButton: 0,
      rangeProgress: (40 / this.rangeAttrs.max) * 100,
      rangeValue: 40,
    });
  }

  handleRandomizeClick() {
    const { setArray } = this.props;
    setArray(this.state.rangeValue);
  }

  handleAlgoButtonClick(algo, index) {
    if (index === this.state.activeSortButton && this.state.activeSortButton != null) return;

    const { setAlgorithm } = this.props;
    setAlgorithm(algo);

    this.setState({ activeSortButton: index });
  }

  handleRangeOnChange(event) {
    const previousValue = this.state.rangeValue;
    const currentValue = parseInt(event.target.value);
    let gap =
      previousValue < currentValue ? currentValue - previousValue : previousValue - currentValue;

    const { addArrayElements, reduceArrayElements } = this.props;
    if (previousValue < currentValue) {
      addArrayElements(gap);
    } else {
      reduceArrayElements(gap);
    }

    this.setState({
      rangeProgress:
        currentValue == this.rangeAttrs.min ? 0 : (currentValue / this.rangeAttrs.max) * 100,
      rangeValue: currentValue,
    });
  }

  handleStartButtonClick() {
    const { sort, array, algorithm } = this.props;
    sort(array, algorithm);
  }

  setSortButtonClassName(index) {
    const base = 'text-sm font-semibold py-2 px-4 mr-0 odd:mr-2 mb-2 rounded-full';
    const active = 'bg-blue-500 border border-blue-500 text-white opacity-50 cursor-not-allowed';
    const inactive = 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow';

    return base.concat(' ').concat(index === this.state.activeSortButton ? active : inactive);
  }

  render() {
    const sortButtons = ['Bubble', 'Selection', 'Insertion', 'Merge', 'Quick', 'Heap'];
    const { isSortRunning } = this.props;

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
              onClick={() => this.handleAlgoButtonClick(item.toLowerCase(), idx)}
            >
              {`${item} Sort`}
            </button>
          ))}
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="configurator-range w-full">
            <div className="flex justify-between items-center">
              <div className="text-4xl">
                {this.state.rangeValue}&nbsp;
                <small className="text-base text-gray-700">elements</small>
              </div>
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow text-xs rounded-full flex-none px-2 py-1"
                onClick={this.handleRandomizeClick}
              >
                Randomize
              </button>
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
                {...this.rangeAttrs}
                ref={this.rangeRef}
                onChange={this.handleRangeOnChange}
              />
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 border border-blue-700 rounded-full w-full shadow"
            onClick={this.handleStartButtonClick}
          >
            {!isSortRunning ? 'Start Sorting' : 'Stop Sorting'}
          </button>
        </div>
      </div>
    );
  }
}

export default Configurator;
