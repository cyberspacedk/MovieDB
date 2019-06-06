import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = ({ value, testPlus, testMinus, testReset }) => {
  return (
    <div>
      <p>Test Component</p>
      <div>{value}</div>
      <button type="button" onClick={testPlus}>
        +
      </button>
      <button type="button" onClick={testMinus}>
        -
      </button>
      <button type="button" onClick={testReset}>
        reset
      </button>
    </div>
  );
};

TestComponent.propTypes = {
  value: PropTypes.number.isRequired,
  testPlus: PropTypes.func.isRequired,
  testMinus: PropTypes.func.isRequired,
  testReset: PropTypes.func.isRequired,
};

export default TestComponent;
