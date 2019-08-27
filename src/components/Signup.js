import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';

import Header from './Header.js';
import Footer from './Footer.js';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <div className="form-container">
      <Header />
      <div className="form-text">
        <h1 className="h1">Admin Sign Up</h1>
        <p className="p">
          Thank you for applying to be an admin. After you submit your name and
          password, an admin will review your application.
        </p>
      </div>
      <Form className="signup-form">
        <label>Username</label>
        <Field
          className="form-field"
          name="username"
          type="text"
          placeholder="Username"
        />
        <label>Password</label>
        <Field
          className="form-field"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className="submit-button">Submit</button>
      </Form>
      <Footer />
    </div>
  );
};


const FormikSignupForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

// Validation
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required(),
        password: Yup.string()
        .required()
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        console.log(values)
        axios
        .post('https://refugee-stories-api-082019.herokuapp.com/api/register', values)
        .then(res => {
            console.log(res.data);
            setStatus(res.data);
            resetForm();
        })
        .catch(error => console.log(error.response));
    }
})(SignupForm);

export default FormikSignupForm;
