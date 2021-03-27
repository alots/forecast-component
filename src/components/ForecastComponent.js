import React from 'react';

import "./style.scss";



const ForecastComponent = () => {
  return (
    <>
    <div className="container"> 
      <svg
        class="progress-ring"
        height="240"
        width="240"
      >
        <circle
          class="progress-ring__circle-grey"
          stroke="rgba(180, 184, 183, 0.5)"
          stroke-width="4"
          fill="transparent"
          r="116"
          cx="120"
          cy="120"
        />
        <circle
          class="progress-ring__circle"
          stroke="grey"
          stroke-width="4"
          fill="transparent"
          r="116"
          cx="120"
          cy="120"
        />
        <svg
          class="progress-ring"
          height="240"
          width="240"
        >
          <circle
            class="progress-ring__circle-grey"
            stroke="rgba(180, 184, 183, 0.5)"
            stroke-width="36"
            fill="transparent"
            r="84"
            cx="120"
            cy="120"
          />
          <circle
            class="progress-ring__circle-orange"
            stroke="rgba(245, 112, 51, 0.89)"
            stroke-width="36"
            fill="transparent"
            r="84"
            cx="120"
            cy="120"
          />   
        </svg>    
      </svg>
      <div className="card">
        <div className="card__progress-bar-value"> 
          <font size="48">95</font>
          <font size="4">%</font>
        </div>
        <div className="card__item">
          <p className="card__item-title">НИТ</p>
          <div className="card__item-body">
            <div className="card__item-body_left">{`234 840 `}</div>
            <div className="card__item-body_right">{`/ 256 051`}</div>
          </div>
        </div>
        <div className="card__item">
        <p className="card__item-title">ПРОГНОЗ</p>
          <div className="card__item-body">
            <div className="card__item-body_left">{`272 289 `}</div>
            <div className="card__item-body_right">{`/ 283 500`}</div>
          </div>
        </div>
      </div>
      <div className="progress-next-percent">96%</div>
    </div>
    </>
  );
}

export default ForecastComponent;