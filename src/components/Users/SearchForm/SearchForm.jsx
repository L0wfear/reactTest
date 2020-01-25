import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputBig, Select } from '../../Common/CommonFields/CommonFields';
import {required} from '../../../utilits/validator';
const SearchForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-row align-items-center">
                    <Field placeholder={'Search'} name={'searchStr'} component={InputBig} validate={required} />
                    <Field name="param" component={Select} validate={required} options = {['id', 'firstName', 'lastName', 'email', 'Phone']} />
                    <div className="col-auto">
                        <button type="submit" disabled={!props.valid} className="btn btn-success mb">Найти</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const SearchFormContainer = (props) => {

    const onSubmit = (formData) => {
        props.searchUsers(formData.searchStr, formData.param);
    }

    return (
        <div className="search_form my-3">
            <SearchFormRedux onSubmit={onSubmit} />
        </div>
    )
}


const SearchFormRedux = reduxForm({ form: 'search' })(SearchForm);

export default SearchFormContainer;