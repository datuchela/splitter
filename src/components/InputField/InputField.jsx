import './InputField.css';

const InputField = ({ inputName, inputValue, handleChange, icon }) => {
  return (
    <div className={inputName}>
      {icon}
      <input
        type='text'
        autoComplete='off'
        name={inputName}
        placeholder='0'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
