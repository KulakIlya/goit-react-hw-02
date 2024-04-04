import PropTypes from 'prop-types';
import styles from './Feedback.module.css';
const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div className={styles.feedbackWrapper}>
      <ul>
        {Object.entries(feedback).map(([name, count]) => (
          <li className={styles.item} key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
      <p className={styles.item}>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
};
export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.array,
  totalFeedback: PropTypes.number,
};
