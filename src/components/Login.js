import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';


const Login = ({history, errors, touched, values, handleSubmit, status}) => {
    //make a post request to retrieve the token from BE
    //set token to local storage
    //navigate user to admin dashboard
    //render a form to allow admin to login

    return (
        <div className="login-form">
        <h1>Login</h1>
        <Form className='main-form'>
          <Field className='field' type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
  
          <Field className='field' type="password" name="password" placeholder="password" />
          {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
          )}
  
          {/* <Field className='field' type="text" name="email" placeholder="email" />
          {touched.email && errors.email && <p className="error">{errors.email}</p>
          } */}
  
          <button className='btn' type="submit">Log me in!</button>
        </Form>
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
      password: Yup.string().required(),
    //   email: Yup.string().required(),
    }),

    handleSubmit(values, { resetForm }) {
        console.log(values);
        axios
        .post('https://refugee-stories-api-082019.herokuapp.com/api/login', values)
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
