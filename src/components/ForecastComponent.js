import React,{ useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import "./style.scss";

const R_CIRCLE = "116";
const R_INNER_CIRCLE = "84";

const circumFerence = (radius) => {
  return 2*3.14*radius
};

const ForecastComponent = () => {
  const [percent, setPercent] = useState(95);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setPercent(Number(data.percent));
    console.log(typeof(data.percent));
  };

  useEffect(() => {
    const circle = document.querySelector('.progress-ring__circle');
    const circleInner = document.querySelector('.progress-ring__circle-orange');
    const radius = circle.r.baseVal.value;
    const radiusInner = circleInner.r.baseVal.value;
    circle.style.strokeDashoffset = `${circumFerence(radius) - circumFerence(radius)/100*percent}`;
    circleInner.style.strokeDashoffset = `${circumFerence(radiusInner) - circumFerence(radiusInner)/100*percent}`;
  }, [percent]);
  
  return (
    <>
    <div className="container"> 
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
      <div className="card">
        <div className="card__progress-bar-value"> 
          <font size="48">{ percent }</font>
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
      <div className="progress-next-percent">{percent + 1}%</div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Percent:</p>
      <input name="percent" placeholder="Enter persent" ref={register({ required: true, maxLength: 3 })}/>
      {errors.percent && <span>Enter Percent 1-100</span>} 
      <input type="submit" />
    </form>
    </>
  );
}

export default ForecastComponent;