import React from 'react';
import { Form, Field, withFormik } from 'formik';

const SignupForm = ({ errors, touched }) => {
    return (
        <div className="signup-form">
            <Form>
                <Field name="username" type="text" placeholder="Username" />
                <Field name="password" type="password" placeholder="Password"/>
                <button>Submit</button>
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
    }
})(SignupForm);


export default FormikSignupForm;