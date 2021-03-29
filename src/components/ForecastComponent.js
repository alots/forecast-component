import React,{ useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ForecastCard from './ForecastCard';
import ForecastCircle from './ForecastCircle';
import { circumFerence } from '../lib/helpers';

import './style.scss';

const ForecastComponent = () => {
  const [percent, setPercent] = useState(95);
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    setPercent(Number(data.percent));
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
        <ForecastCircle /> 
        <ForecastCard value={percent} />
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