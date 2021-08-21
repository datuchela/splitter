import { useState } from 'react';
import TipButton from './TipButton/TipButton';

import './TipButtons.css';

const TipButtons = ({ clickedValue, tipObjects }) => {
  const [tipAmount, setTipAmount] = useState(5);
  const clickHandler = (e) => {
    const previousTip = document.getElementById(
      tipObjects.IDs[tipObjects.values.indexOf(tipAmount)]
    );
    previousTip.classList.remove('clickedTip');
    // console.log(previousTip);
    setTipAmount(parseInt(e.target.name));
    clickedValue = parseInt(tipAmount);
    e.target.classList.add('clickedTip');
  };
  return (
    <div className='tips'>
      {tipObjects.values.map((value) => {
        return (
          <TipButton
            tipValue={value}
            key={value}
            tipId={tipObjects.IDs[tipObjects.values.indexOf(value)]}
            handleClick={clickHandler}
          />
        );
      })}
      <div className='tip custom'>Custom</div>
      {/* <input type='text' className='tip custom' placeholder='Custom' /> */}
    </div>
  );
};

export default TipButtons;
