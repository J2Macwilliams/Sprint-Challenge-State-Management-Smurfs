import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })

export const getBlue = () => async (dispatch) => {
    try {
        dispatch(loading());

        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                console.log("Blue?", response.data)
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};

export function smurfSignUpRequest(smurfData) {
    return dispatch => {
        return axios.post('http://localhost:3333/smurfs', smurfData);
    }
        
    }
