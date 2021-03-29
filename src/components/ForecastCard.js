import React from 'react';

import './style.scss';

const ForecastCard = ({value}) => {
  return (
    <>
      <div className="card">
        <div className="card__progress-bar-value"> 
          <font size="48">{ value }</font>
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
      <div className="progress-next-percent">{value + 1}%</div>
    </>
  );
};

export default ForecastCard;