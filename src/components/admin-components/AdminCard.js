import React from 'react';
import { reject } from 'q';

const AdminCard = (props) => {
    return (
        <div className='admin-card'>
            <h5>{props.firstName} {props.lastName}</h5>
            <p>Email: {props.email}</p>
            <button onClick={() => props.approve(props.id)}>Approve</button>
            <button onClick={() => props.reject(props.id)}>Reject</button>
        </div>
    )
}

export default AdminCard;