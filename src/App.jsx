// App.jsx
import React, { useState } from 'react';
import Feedback from './components/Feedback';
import Options from './components/Options';
import Notification from './components/Notification';
import styles from './components/Feedback.module.css'; // Імпорт CSS-модуля для стилізації компоненту

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={styles.app}> {/* Використання класу з CSS-модуля */}
      <h1>Sip Happens Café</h1>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          className={styles.feedbackContainer} // Використання класу з CSS-модуля
        />
      ) : (
        <Notification
          message="No feedback given yet."
          className={styles.notification} // Використання класу з CSS-модуля
        />
      )}
    </div>
  );
};

export default App;
