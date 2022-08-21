import "./sign-up-form.scss";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const defaultFormFields = {
  email: "",
  password: "",
};
interface Props {
  handleRegister: (email: string, password: string) => void;
}
const SignUpForm = ({ handleRegister }: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const resetFormFields = () => {
    // setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    handleRegister(formFields.email, formFields.password);
    resetFormFields();
  };

  return (
    <div className="sign-up-container">
      <span>Зарегистрируйтесь или войдите</span>
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
          <Button type="submit">Register</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleNavigate}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
