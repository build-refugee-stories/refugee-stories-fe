import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Header from './Header.js';
import Footer from './Footer.js';

const Login = ({ history, errors, touched, values, handleSubmit, status }) => {
  //make a post request to retrieve the token from BE
  //set token to local storage
  //navigate user to admin dashboard
  //render a form to allow admin to login

  return (
    <div className="form-container">
      <div className="login-form">
        <Header />
        <div className="form-text">
          <h1 className="h1">Admin Login</h1>
          <p className="p">Not an admin? Apply to be an admin here.</p>
        </div>
        <Form className="signup-form main-form">
          <label>Username</label>
          <Field
            className="field form-field"
            type="text"
            name="username"
            placeholder="Username"
          />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <label>Password</label>
          <Field
            className="field form-field"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}

          {/* <Field className='field' type="text" name="email" placeholder="email" />
          {touched.email && errors.email && <p className="error">{errors.email}</p>
          } */}

          <button className="btn submit-button" type="submit">
            Log me in!
          </button>
        </Form>
        <Footer />
      </div>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
    //   email: Yup.string().required(),
  }),

  handleSubmit(values, { resetForm }) {
    console.log(values);
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/login',
        values
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        // history.push("/StoryView");
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLoginForm;
