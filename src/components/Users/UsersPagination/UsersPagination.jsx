import React from 'react';
import styles from '../Users.module.css';

const UsersPagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let arr = [];

    for (let i = (props.currentPage <= 5 ? 1 : (props.currentPage + 5 > pagesCount ? pagesCount - 9 : props.currentPage - 5));
        i <= (pagesCount <= 10 ? pagesCount : props.currentPage <= 5 ? 10 : (props.currentPage + 5 > pagesCount ? pagesCount : props.currentPage + 4)); i++) {
        arr.push(i);
    }

    return (
            <nav className={styles.pagination}>
                <ul className="pagination justify-content-center">
                    {arr.map((e, i) => <li key = {i} className={`page-item ${e === props.currentPage && 'active'}`} onClick={() => { props.onPageChanged(e)}}>
                                        <span className="page-link"> {e} </span>
                                  </li>)}
                </ul>
            </nav>
    )
}

export default UsersPagination;