import * as actionTypes from '../actions/actionTypes';

const initState = {
  jobs: [],
  error: null,
  loading: false
};

const job = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.JOB_ADD:
      return {
        ...state,
        jobs: [...state.jobs, action.newJob]
      }
  }

  return state;
}

export default job;