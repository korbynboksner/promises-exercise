$("#favSubmit").on("click", function(e) {
    e.preventDefault();
    let inputValue = $("#favnum").val()
    let promise = axios.get(`http://numbersapi.com/${inputValue}`)

    promise 
        .then(data =>{
            $("#location").append(`<p>${data.data}</p>`);
        })
             
        .catch(err => console.log(err));
})


$("#rangeSubmit").on("click", function(e) {
    e.preventDefault();
    let firstValue = $("#firstnum").val()
    let secondValue = $("#secondnum").val()
    let promise = axios.get(`http://numbersapi.com/${firstValue}..${secondValue}`)

    promise 
        .then(data =>{
            for(let fact in data.data ){
                console.log(data.data[fact])
                $("#location").append(`<p>${data.data[fact]}</p>`);    
            }
            
            
        })
             
        .catch(err => console.log(err));
})


$("#fav4Submit").on("click", function(e) {
    e.preventDefault();
    let inputValue = $("#fav4num").val()

    axios
        .get(`http://numbersapi.com/${inputValue}`)
        .then(fact1 => {
            $("#location").append(`<p>${fact1.data}</p>`);
            return axios.get(`http://numbersapi.com/${inputValue}`)
        })
        .then(fact2 => {
            $("#location").append(`<p>${fact2.data}</p>`);
            return axios.get(`http://numbersapi.com/${inputValue}`)
        })
        .then(fact3 => {
            $("#location").append(`<p>${fact3.data}</p>`);
            return axios.get(`http://numbersapi.com/${inputValue}`)
        })
        .then(fact4 => {
            $("#location").append(`<p>${fact4.data}</p>`);
            return axios.get(`http://numbersapi.com/${inputValue}`)
        })
            
            

    .catch(err => {
        console.log(err)
    })
})