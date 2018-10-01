import * as actionTypes from './actionTypes';

export const createJob = (data) => {
	return dispatch => {
		dispatch(createJobStart());
		dispatch(createJobSuccess(data));
	}
}

export const createJobStart = () => {
	return {
		type: actionTypes.JOB_ADD_START
	}
}

export const createJobSuccess = (data) => {
	return {
		type: actionTypes.JOB_ADD,
		data: data
	}
}

export const createJobFail = () => {
	return {
		type: actionTypes.JOB_ADD_FAIL
	}
}

