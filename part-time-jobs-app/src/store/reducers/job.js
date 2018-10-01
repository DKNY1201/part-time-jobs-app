import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initState = {
  jobs: [],
  error: null,
  loading: false
};

const job = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.JOB_ADD:
      const newJobs = [...state.jobs, action.data.job];
      return updateObject(state, {jobs: newJobs});
    case actionTypes.JOB_ADD_START:
      return updateObject(state, {loading: true});
    default: return state;
  }
}

export default job;