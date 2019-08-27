import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";

const SignupForm = ({ errors, touched }) => {
    return (
        <div className="signup-form">
            <Form>
                <Field name="username" type="text" placeholder="Username" />
                {/* Adding destructured 'errors' prop to the form */}
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field name="password" type="password" placeholder="Password"/>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
};

const FormikSignupForm = withFormik ({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
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
        .catch(error => console.log(error.res));
    }
})(SignupForm);


export default FormikSignupForm;