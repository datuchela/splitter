import './TipButton.css';

const TipButton = ({ tipValue, handleClick, tipId }) => {
  return (
    <button
      id={tipId}
      className={`tip ${+tipValue}`}
      name={tipValue}
      onClick={handleClick}
    >
      {tipValue}%
    </button>
  );
};

export default TipButton;
