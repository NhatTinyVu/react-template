import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Exercise1 from './exercise/Exercise1';
import Exercise2 from './exercise/Exercise2';

const Exercise = ({ exercise }) => {
  switch (exercise) {
    case 1:
      return <Exercise1 />;
    case 2:
      return <Exercise2 />;
    default:
      return <div>Exercise</div>;
  }
};

Exercise.propTypes = {
  exercise: PropTypes.number.isRequired,
};

const Training = () => {
  const [exercise, setExercise] = useState(1);

  return (
    <div>
      <h3>Training</h3>
      <button onClick={() => setExercise(1)}>Exercise1</button>
      <button onClick={() => setExercise(2)}>Exercise1</button>
      <Exercise exercise={exercise} />
    </div>
  );
};

export default Training;
