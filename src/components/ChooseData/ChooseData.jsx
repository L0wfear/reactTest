import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/dataReducer';

const ChooseData = (props) => {

    const onBtnClick = (dataSize) => {
        props.setData(dataSize);
    }

    return <div className="choose_data mx-auto">
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger btn-lg" onClick = {() => {onBtnClick(32)}} >GET SOME DATA</button>
                    <button type="button" className="btn btn-danger btn-lg" onClick = {() => {onBtnClick(1000, 3)}}>GET ALL DATA</button>
                </div>
           </div>
}

export default connect(null, { setData })(ChooseData)