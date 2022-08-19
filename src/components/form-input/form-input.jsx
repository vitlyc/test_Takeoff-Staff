import "./form-input.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" placeholder={label} {...otherProps} />
    </div>
  );
};

export default FormInput;
