// Options.jsx
import React from 'react';
import clsx from 'clsx'; // Імпортуємо бібліотеку clsx

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={clsx('options-container')}> {/* Додаємо клас за допомогою clsx */}
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
