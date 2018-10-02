import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initState = {
  jobs: [],
  error: null,
  loading: false
};

const job = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.JOB_ADD_SUCCESS:
      const newJobs = [...state.jobs, action.data];
      return updateObject(state, {jobs: newJobs, loading: false});
    case actionTypes.JOB_ADD_START:
      return updateObject(state, {loading: true});
    case actionTypes.JOB_ADD_FAIL:
      return updateObject(state, {error: action.error});
    default: return state;
  }
}

export default job;