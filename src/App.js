import React from 'react';
import Users from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import ChooseData from './components/ChooseData/ChooseData';


function App(props) {

  if(!props.isData) {
    return (
      <div className="container">
        <ChooseData />
      </div>
    );
  }

  return (
    <div className="container">
      <Users />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isData: state.isData.isData
  }
}

export default connect(mapStateToProps)(App);
