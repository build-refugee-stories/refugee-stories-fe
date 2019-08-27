import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const StoryForm = () => {
    return (
      <div className="story-container">
        <div className="story-text">
            <h1 className="h1">Share Your Story</h1>
            <p className="p-story">Please share your story with us. After our admins have reviewed it, we do our part to share it with the world.
            </p>
        </div>
      
        <Form className="story-form">
         <label>Author</label>
         <Field 
            className=""
            name="author"
            type="text"
            placeholder="Author"         
         />   
        <label>Country of Origin</label>
        <Field 
            className=""
            name="country"
            type="text"
            placeholder="Country of Origin"
        />        
        <label>Title</label>
        <Field 
            className=""
            name="title"
            type="text"
            placeholder="Title"
        />
        <label>Your Story</label>
        <Field 
            className=""
            component="textarea"
            name="story"
            type="text"
        />   
        <button className="submit-button">Submit</button> 
        </Form>   
      </div>  
    );
};

const FormikStoryForm = withFormik({
    mapPropsToValues({ author, country, title, story }) {
        return {
            author: author || '',
            country: country || '',
            title: title || '',
            story: story || '',
        };
    },
    validationSchema: Yup.object().shape({
        author: Yup.string().required(),
        country: Yup.string().required(),
        title: Yup.string().required(),
        story: Yup.string().required(),
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        console.log(values)
        axios
        .post('https://refugee-stories-api-082019.herokuapp.com/api/public', values)
        .then(res => {
            console.log(res.data);
            setStatus(res.data);
            resetForm();
        })
        .catch(error => console.log(error.response));
    }
})(StoryForm);

export default FormikStoryForm;