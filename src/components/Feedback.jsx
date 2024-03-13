// Feedback.jsx
import React from 'react';
import clsx from 'clsx'; // Імпортуємо бібліотеку clsx



const Feedback = ({ feedback, totalFeedback, positivePercentage, negativePercentage }) => {
  return (
    <div>
      <h2>Feedback statistics</h2>
      <p>😁 Good: {feedback.good}</p>
      <p>😑 Neutral: {feedback.neutral}</p>
      <p> 😭 Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      <p>Negative feedback: {negativePercentage}%</p>
    </div>
  );
};

export default Feedback;
