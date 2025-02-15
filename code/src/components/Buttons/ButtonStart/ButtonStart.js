import React from 'react';
import './ButtonStart.css';

export const ButtonStart = ({ onClick }) => {
  return (
    <button
      type="button"
      className="button-start"
      onClick={onClick}
      aria-label="Start Questionnaire">
      Start
    </button>
  );
};
