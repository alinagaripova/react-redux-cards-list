/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Description = React.memo(({ weight, height }) => {
  return (
    <p style={{ margin: 0 }}>
      Weight: {weight}, growth: {height}
    </p>
  );
});

export default Description;
