import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';


class JobAdd extends Component {
  render() {
    return (
      <Fragment>
        <h1>Job Adding</h1>
        <form action="">
          <div className="form-row">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name"/>
          </div>
          <div className="form-row">
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="">Category</label>
            <input type="text" placeholder="Category"/>
          </div>
          <div className="form-row">
            <label htmlFor="">Location</label>
            <input type="text" placeholder="Location"/>
          </div>
          <div className="form-row">
            <label htmlFor="">Hour rate</label>
            <input type="text" placeholder="Hour rate"/>
          </div>
          <div className="form-row">
            <label htmlFor="">Preferred Date</label>
            <input type="text" placeholder="Preferred Date"/>
          </div>
          <div className="form-row">
            <label htmlFor="">Preferred Time</label>
            <input type="text" placeholder="Preferred Time"/>
          </div>
          <div className="form-row">
            <button type="button">Add</button>
          </div>
        </form>
      </Fragment>
      
      
    )
  }
}

const mapPropsToState = state => {
  return {

  }
}

const mapDispatchToState = dispatch => {
  return {

  }
}

export default connect(mapPropsToState, mapDispatchToState)(JobAdd);