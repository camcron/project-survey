import React from 'react';
import './Intro.css';
import { ButtonStart } from '../Buttons/ButtonStart/ButtonStart';

export const Intro = ({ handleStepIncrease }) => {
  return (
    <section className="intro-wrapper">
      <h1>We are thrilled to have you as our guest at the Mountain Lodge!</h1>
      <p>
          To ensure that your stay is everything you hope it to be and more, we
          kindly ask that you take a moment to complete this questionnaire before
          your arrival.
      </p><ButtonStart onClick={handleStepIncrease} />
    </section>
  );
};
