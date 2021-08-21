import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import InputField from './components/InputField/InputField';
// import TipButtons from './components/TipButtons/TipButtons';
import OutputField from './components/OutputField/OutputField';
import ResetButton from './components/ResetButton/ResetButton';
import DollarIcon from './components/InputField/DollarIcon';
import PersonIcon from './components/InputField/PersonIcon';
import TipButton from './components/TipButtons/TipButton/TipButton';

import './App.css';
import './components/TipButtons/TipButtons.css';

function App() {
  const tipObjects = {
    values: [5, 10, 15, 25, 50],
    IDs: ['five', 'ten', 'fifteen', 'twentyfive', 'fifty'],
  };
  const [input, setInput] = useState({
    bill: '',
    tip: '',
    people: '',
  });

  const [output, setOutput] = useState({
    tipAmount: '$0',
    totalAmount: '$0',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  // --- input handlers --- //

  const changeHandler = (e) => {
    const re = /^\d*\.?\d*$/;
    console.log(e.target);
    if (e.target.value === '' || re.test(e.target.value)) {
      setInput({ ...input, [e.target.name]: parseInt(e.target.value) });
    }
    if (isNaN(e.target.value)) {
      setInput({ ...input, [e.target.name]: '' });
    }
  };
  const previousTip = document.querySelector('.clickedTip');

  const tipClickHandler = (e) => {
    if (previousTip) {
      previousTip.classList.remove('clickedTip');
    }
    setInput({ ...input, tip: parseInt(e.target.name) });
    e.target.classList.add('clickedTip');
  };

  // --- /input handlers/ --- //

  useEffect(() => {
    if (input.bill || input.tip || input.people) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

    const tipAmount = ((input.bill * input.tip) / 100 / input.people).toFixed(
      2
    );
    const totalAmount = (
      (input.bill + (input.bill * input.tip) / 100) /
      input.people
    ).toFixed(2);
    if (!isNaN(tipAmount) & isFinite(tipAmount)) {
      setOutput({
        tipAmount: tipAmount,
        totalAmount: totalAmount,
      });
    }
    console.log(tipAmount, totalAmount);
    return () => console.log('unmount');
  }, [input]);

  return (
    <>
      <Header />
      <div className='app'>
        <div className='left-side'>
          <div className='input-wrapper'>
            <p className='label'>Bill</p>
            <InputField
              icon={<DollarIcon />}
              inputName='bill'
              inputValue={input.bill}
              handleChange={changeHandler}
            />
          </div>
          <div className='input-wrapper'>
            <p className='label'>Select Tip %</p>
            <div className='tips'>
              {tipObjects.values.map((value) => {
                return (
                  <TipButton
                    tipValue={value}
                    key={value}
                    tipId={tipObjects.IDs[tipObjects.values.indexOf(value)]}
                    handleClick={tipClickHandler}
                  />
                );
              })}
              {/* <div className='tip custom'>Custom</div> */}
              <input
                type='text'
                name='tip'
                className='tip custom'
                placeholder='Custom'
                value={`${input.tip}`}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className='input-wrapper'>
            <p className='label'>Number of People</p>
            <InputField
              icon={<PersonIcon />}
              inputName='people'
              inputValue={input.people}
              handleChange={changeHandler}
            />
          </div>
        </div>
        <div className='right-side'>
          <OutputField
            outPutClassName='first-result'
            outPutPrimary='Tip Amount'
            outPutValue={output.tipAmount}
          />
          <OutputField
            outPutClassName='second-result'
            outPutPrimary='Total'
            outPutValue={output.totalAmount}
          />
          <ResetButton
            disabled={buttonDisabled}
            handleClick={() => {
              setInput({
                bill: '',
                tip: '',
                people: '',
              });
              setOutput({
                tipAmount: '$0',
                totalAmount: '$0',
              });
              previousTip.classList.remove('clickedTip');
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
