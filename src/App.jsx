// App.jsx
import Feedback from './components/Feedback';
import Options from './components/Options';
import Notification from './components/Notification';
import styles from './components/Feedback.module.css'; // Імпорт CSS-модуля для стилізації компоненту
import React, { useState, useEffect } from 'react';


const App = () => {
  // Ініціалізуємо стан за допомогою даних з локального сховища, якщо вони є
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback ? JSON.parse(storedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  // Ефект для збереження стану в локальне сховище при зміні стану
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);
  const negativePercentage = Math.round((feedback.bad / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
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
          positivePercentage={positivePercentage}
          negativePercentage={negativePercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;