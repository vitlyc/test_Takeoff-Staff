import "./sign-in-form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = ({ handleLogin }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/sign-up");
  };

  const resetFormFields = () => {
    // setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin(formFields);
    resetFormFields();
  };

  return (
    <div className="sign-in-container">
      <span>Войдите или зарегистрируйтесь</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Login</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            type="button"
            onClick={handleNavigate}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
