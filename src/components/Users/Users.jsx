import React from 'react';
import preloader from '../../img/preloader.svg';
import UsersTableHead from './UsersTableHeads/UsersTableHead';

const Users = (props) => {

    return (
        <div className="mb-5">
            <table className="table table-bordered table-dark">
                <thead>
                    <UsersTableHead />
                </thead>
                {!props.toggleIsFetching ?
                    <tbody>
                        <tr>
                            <td style={{ 'border': 'none' }}>
                                <img style={{ 'marginLeft': '120%' }} src={preloader} alt='preloader' />
                            </td>
                        </tr>
                    </tbody>
                    :
                    <tbody>
                        {props.currentUsers.map((u, i) => <tr onClick={(e) => { props.getElementInnerText(e) }} key={i}>
                            <td>{u.id}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                        </tr>)}
                    </tbody>
                }
            </table>
        </div>
    )
}

export default Users;