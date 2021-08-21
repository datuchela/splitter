import './ResetButton.css';

const ResetButton = ({ disabled, handleClick }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className='reset-btn'>
      RESET
    </button>
  );
};

export default ResetButton;
