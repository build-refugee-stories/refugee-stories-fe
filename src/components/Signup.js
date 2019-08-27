import React from 'react';
import { Form, Field, withFormik } from 'formik';
import NavBar from './NavBar.js';

const SignupForm = ({ errors, touched }) => {
  return (
    <div>
      <NavBar />
      <Form className="signup-form">
        <Field
          className="form-field"
          name="username"
          type="text"
          placeholder="Username"
        />
        <Field
          className="form-field"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className="submit-button">Submit</button>
      </Form>
    </div>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  }
})(SignupForm);

export default FormikSignupForm;
