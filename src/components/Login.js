import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Header from "./Header.js";
import Footer from "./Footer.js";

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
          <p className="p">
            Not an admin? Apply to be an admin
            <Link to={"/signup"}>
              <span id="here"> here.</span>
            </Link>
          </p>
        </div>
        <Form className="signup-form main-form">
          <label>Email</label>
          <Field
            className="field form-field"
            type="text"
            name="email"
            placeholder="email address"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
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
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { props, resetForm }) {
    axios
      .post(
        "https://refugee-stories-api-082019.herokuapp.com/api/login",
        values
      )
      .then(res => {
        props.updateAdmin(true);
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLoginForm;
