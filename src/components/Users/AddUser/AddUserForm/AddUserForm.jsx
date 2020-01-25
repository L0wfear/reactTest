import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, InputSmall} from '../../../Common/CommonFields/CommonFields';
import { required} from '../../../../utilits/validator';

const AddUserForm = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-row align-items-center">
                    <Field placeholder={'id'} name={'id'} component={InputSmall} type="number" validate={required} />
                    <Field placeholder={'Firstname'} name={'firstName'} component={Input} validate={required} />
                    <Field placeholder={'Lastname'} name={'lastName'} component={Input} validate={required} />
                    <Field placeholder={'email'} name={'email'} component={Input} validate={required} />
                    <Field placeholder={'Phone'} name={'phone'} component={Input} validate={required} />
                    <div className="col-auto">
                        <button type="submit" disabled={!props.valid} className="btn btn-success mb">Добавить</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AddUserReduxForm = reduxForm({ form: 'items' })(AddUserForm);

export default AddUserReduxForm;