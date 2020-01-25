import React from 'react';


const CurrentString = (props) => {
    return (
        <div>
            {props.currentString.visible ? <div>
                <p>Выбран пользователь: <b>{props.currentString.user.firstName} {props.currentString.user.lastName} </b></p>
                <p>Описание: <br/> 
                    <b>{props.currentString.user.description || 'описание отсутствует'}</b>
                </p>
                <p>Адрес проживания: <b>{props.currentString.user.address ? props.currentString.user.address.streetAddress : 'адрес не указан'}</b></p>
                <p>Город: <b>{props.currentString.user.address ? props.currentString.user.address.city : 'город не указан'}</b></p>
                <p>Провинция: <b>{props.currentString.user.address ? props.currentString.user.address.state : 'провинция не указана'}</b></p>
                <p>Индекс: <b>{props.currentString.user.address ? props.currentString.user.address.zip : 'индекс не указан'}</b></p>
            </div> : <div>ВЫБЕРИТЕ ПОЛЬЗОВАТЕЛЯ</div>}
        </div>
    )
}

export default CurrentString;

