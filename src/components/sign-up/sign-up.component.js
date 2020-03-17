import React, { Component } from "react";
import "./sign-up.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-component/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      //to clear up form
      this.setState = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            required
            onChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required
            onChange={this.handleChange}
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
