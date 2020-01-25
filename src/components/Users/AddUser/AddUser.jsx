import React, { useState } from 'react';
import AddUserForm from './AddUserForm/AddUserForm';

const AddUser = (props) => {

    const [isActive, setIsActive] = useState('')

    const onSubmit = (formData) => {
        props.addUser(formData.id, formData.firstName, formData.lastName, formData.email, formData.phone);
    }

    return (
        <div className="add_user">
            <button type="button" className="btn btn-danger btn-lg shadow-none" onClick={() => setIsActive(isActive ? '' : 'active')} >ADD USER</button>
            <div className={`add_user__content ${isActive}`}>
                <AddUserForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default AddUser;