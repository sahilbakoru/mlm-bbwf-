




export const User = () => {
    axios.get("http://localhost:8001/allusers",  { crossdomain: true }).then(response => {
        setUser3(response);
        
      })


    .then(function(response){
        return response.json()
    })

    .catch( err => console.log(err))
};