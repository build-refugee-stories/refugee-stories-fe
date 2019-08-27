import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import StoryView from './StoryView'


const Homeview = () => {
    const [storyList, setStoryList] = useState([]);

    const getStories = () => {
        axiosWithAuth()
            .get('https://refugee-stories-api-082019.herokuapp.com/api/public')
            .then(res => {
                console.log(res.data);
                setStoryList(res.data);
                })
            .catch(error => console.log(error.response))
    };

    useEffect(() => {
        getStories();
    }, []);


    return (
        <div className='home-container'>
            <StoryView stories={storyList} />

        </div>
        
    )
}

export default Homeview;