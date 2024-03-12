// Notification.jsx
import React from 'react';
import clsx from 'clsx'; // Імпортуємо бібліотеку clsx

const Notification = ({ message, className }) => {
  return (
    <div className={clsx('notification', className)}> {/* Додаємо класи за допомогою clsx */}
      <p>{message}</p>
    </div>
  );
};

export default Notification;
