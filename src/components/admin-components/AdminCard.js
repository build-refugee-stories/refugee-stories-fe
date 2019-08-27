import React from 'react';

const AdminCard = (props) => {
    return (
        <div className='admin-card'>
            <h5>{props.firstName} {props.lastName}</h5>
            <p>Email: {props.email}</p>
            <button>Approve</button>
            <button>Reject</button>
        </div>
    )
}

export default AdminCard;