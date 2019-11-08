import axios from "axios"
// import smurfApi from '../components/SmufApi';

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
// export const DELETE_SMURF_SUCCESS = 'DELETE'

export const loading = () => ({ type: LOADING })
export const success = (data) => ({ type: SUCCESS, payload: data })
export const failure = (data) => ({ type: FAILURE, payload: data })
// export const deleteSmurfSuccess = (data) => ({ type: DELETE, payload: data})

export const getBlue = () => async (dispatch) => {
    try {
        dispatch(loading());

        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                
                const info = response.data
                dispatch(
                    success(info)
                )
            })

    } catch (error) {
        dispatch(failure(error))
    }
};

// export function deleteSmurf(smurf){
//     return dispatch => {
//         return smurfApi.deleteSmurf(smurf)
//         .then(() => {
//             console.log(`Deleted ${smurf.id}`)
//             dispatch(deleteSmurfSuccess(data));
//             return;
//         })
//         .catch(error => {
//             throw(error);
//           })
//     }
// }

export function smurfSignUpRequest(smurfData) {
    return dispatch => {
        return axios.post('http://localhost:3333/smurfs', smurfData);
    }

};

