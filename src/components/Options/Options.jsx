import PropTypes from 'prop-types';

const Options = ({
  options,
  onOptionClick,
  isResetButtonVisible,
  handleResetFeedback,
}) => {
  return (
    <div>
      {options.map((item) => (
        <button onClick={() => onOptionClick(item)} key={item}>
          {item}
        </button>
      ))}
      {isResetButtonVisible && (
        <button onClick={handleResetFeedback}>Reset</button>
      )}
    </div>
  );
};
export default Options;

Options.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func,
  isResetButtonVisible: PropTypes.bool,
  handleResetFeedback: PropTypes.func,
};
