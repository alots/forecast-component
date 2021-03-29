import React from 'react';

import './style.scss';

const R_CIRCLE = "116";
const R_INNER_CIRCLE = "84";

const ForecastCircle = () => {
  return (
    <svg
        className="progress-ring"
        height="240"
        width="240"
      >
        <circle
          className="progress-ring__circle-grey"
          stroke="rgba(180, 184, 183, 0.5)"
          strokeWidth="4"
          fill="transparent"
          r={R_CIRCLE}
          cx="120"
          cy="120"
        />
        <circle
          className="progress-ring__circle"
          stroke="grey"
          strokeWidth="4"
          fill="transparent"
          r={R_CIRCLE}
          cx="120"
          cy="120"
        />
        <svg
          className="progress-ring"
          height="240"
          width="240"
        >
          <circle
            className="progress-ring__circle-grey"
            stroke="rgba(180, 184, 183, 0.5)"
            strokeWidth="36"
            fill="transparent"
            r={R_INNER_CIRCLE}
            cx="120"
            cy="120"
          />
          <circle
            className="progress-ring__circle-orange"
            stroke="rgba(245, 112, 51, 0.89)"
            strokeWidth="36"
            fill="transparent"
            r={R_INNER_CIRCLE}
            cx="120"
            cy="120"
          />   
        </svg>    
      </svg>
  );
};

export default ForecastCircle;