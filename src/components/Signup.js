import React from 'react';
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
        .required("Username Required"),

        password: Yup.string()
        .min(6)
        .required("Password Required")
    }),

    handleSubmit(values) {
        console.log(values)
    }
})(SignupForm);


export default FormikSignupForm;