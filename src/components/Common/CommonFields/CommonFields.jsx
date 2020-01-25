import React from 'react';
import styles from './CommonFields.module.css';


export const Input = ({ input, meta, ...props }) => {
    
    return (
        <div className= {`col-md-2 ${meta.touched && meta.error && styles.error}`} data-validate = {meta.error} >
            <input {...input} {...props} className="form-control mb"  />
        </div>)
}

export const InputSmall = ({ input, meta, ...props }) => {
    return (
        <div className={`col-md-1 ${meta.touched && meta.error && styles.error}`} data-validate = {meta.error}>
            <input {...input} {...props} className="form-control mb"  />
        </div>)
}

export const InputBig = ({ input, meta, ...props }) => {
    
    return (
        <div className= {`col-md-4 ${meta.touched && meta.error && styles.error}`} data-validate = {meta.error} >
            <input {...input} {...props} className="form-control mb"  />
        </div>)
}

export const Select = ({ input, meta, ...props }) => {
    
    return (
        <div className= {`col-md-2`} >
            <select {...input} {...props} className="form-control mb">
                <option></option>
                {props.options.map(val => <option key = {val} value = {val}> {val} </option>)}
            </select>
        </div>)
}
