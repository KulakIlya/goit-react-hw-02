import PropTypes from 'prop-types';

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div>
      <ul>
        {Object.entries(feedback).map(([name, count]) => (
          <li key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
};
export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.array,
  totalFeedback: PropTypes.number,
};
