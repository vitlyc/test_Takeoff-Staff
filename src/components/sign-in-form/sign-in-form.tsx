import "./sign-in-form.scss";
import { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
  email: "",
  password: "",
};
export type Fields = {
  email: string;
  password: string;
};

interface Props {
  handleLogin: (email: string, password: string) => void;
}

const SignInForm = ({ handleLogin }: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleLogin(formFields.email, formFields.password);
    resetFormFields();
  };

  const handleNavigate = () => {
    navigate("/sign-up");
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
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
