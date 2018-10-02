import * as actionTypes from './actionTypes';
import jobAxios from "../../axios/job-axios";

export const createJob = (newJobs) => {
	return dispatch => {
		dispatch(createJobStart());
    jobAxios.post('', newJobs)
      .then(response => dispatch(createJobSuccess(response.data.job)))
			.catch(error => dispatch(createJobFail(error)))
	}
}

export const createJobStart = () => {
	return {
		type: actionTypes.JOB_ADD_START
	}
}

export const createJobSuccess = (data) => {
	return {
		type: actionTypes.JOB_ADD_SUCCESS,
		data: data
	}
}

export const createJobFail = (error) => {
	return {
		type: actionTypes.JOB_ADD_FAIL,
		error: error
	}
}

