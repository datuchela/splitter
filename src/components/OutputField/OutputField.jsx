import './OutputField.css';

const OutputField = ({
  outPutClassName,
  outPutPrimary,
  outPutSecondary,
  outPutValue,
}) => {
  return (
    <div className={`result ` + outPutClassName}>
      <div className='left-label'>
        <p className='primary-label'>{outPutPrimary}</p>
        <p className='secondary-label'>/ person</p>
      </div>
      <p className='result-amount'>{outPutValue}</p>
    </div>
  );
};

export default OutputField;
