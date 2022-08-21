import "./button.scss";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
};

const Button = ({ children, buttonType = BUTTON_TYPE_CLASSES.base, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
