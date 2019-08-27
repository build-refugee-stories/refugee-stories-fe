import React, { useState } from "react";
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const AdminsForReview = (props) => {
 return (
     <div className='dashboard-container-1'>
         <ul>
             {/* here, we're going to map over the admins for review being passed in via props, and create a little card for each of them */}
             <li>Admin 1</li>
             <li>Admin 2</li>
             <li>Admin 3</li>
             <li>Admin 4</li>
             <li>Admin 5</li>
         </ul>
     </div>
 )
}

export default AdminsForReview;