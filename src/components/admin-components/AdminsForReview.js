import React, { useState } from "react";
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const AdminsForReview = (props) => {
 return (
     <div className='container'>
         <h2>Prospective Administrators For Your Review:</h2>
         <p>Admins for review awaiting BE update.</p>
     </div>
 )
}

export default AdminsForReview;