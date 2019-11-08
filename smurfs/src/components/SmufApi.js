class smurfApi {
    static deleteSmurf(smurf){
        const request = new Request(`http://localhost:3333/smurfs/${smurf.id}`, {method: 'DELETE'});
    
        return axios.get(request)
            .then(response => {
                console.log('SmurfDelete!', response)
                return response.json();
            })
            .catch(error => {
                return error;
            })

    }
}
export default smurfApi

