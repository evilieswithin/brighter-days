import React from 'react';
import Button from '../ui/Button/Button';

const CauseCard = ({ image, cardTitle, raisedAmt, goalAmt, percentRaised }) => {
  return (
    <div className='w-[437px] font-shippori space-y-5 shadow-xl pb-3'>
      <img src={image} alt={cardTitle} className='h-[360px] object-fill' />

      <div className='flex flex-col space-y-3 mx-6'>
        <h3 className=' font-bold text-2xl text-dark'>{cardTitle}</h3>
        <progress
          value={percentRaised}
          max='100'
          className='h-1 rounded-lg w-full'
        />

        <div className='flex items-center justify-between'>
          <p className='text-dark text-lg font-bold'>Raised - {raisedAmt}</p>
          <p className='text-primary text-lg font-bold'>Goal - {goalAmt}</p>
        </div>

        <Button text='DONATE' />
      </div>
    </div>
  );
};

export default CauseCard;