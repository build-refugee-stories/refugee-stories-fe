import React, { useState } from "react";
import AdminCard from './AdminCard';

const AdminsForReview = ({admins}) => {
 return (
     <div className='container'>
         <h2>New Administrators For Your Review:</h2>
         {/* <div className='admins-display'>
            { (admins.length > 0) ? (admins.map(admin => (
                <AdminCard key={admin.id} firstName={admin.firstName} lastName={admin.lastName} email={admin.email} />))) : (<p>There are no new admins for review at this time.</p>)
            }
           </div> */}
     </div>
 )
}

export default AdminsForReview;