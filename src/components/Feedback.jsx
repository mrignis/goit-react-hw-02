// Feedback.jsx
import React from 'react';
import clsx from 'clsx'; // Імпортуємо бібліотеку clsx

const Feedback = ({ feedback, totalFeedback, className }) => {
  return (
    <div className={clsx('feedback', className)}> {/* Додаємо класи за допомогою clsx */}
      <h2>Feedback statistics</h2>
      <p>😊Good: {feedback.good} </p>
      <p>😑Neutral: {feedback.neutral}</p>
      <p>😭Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
    </div>
  );
};

export default Feedback;
