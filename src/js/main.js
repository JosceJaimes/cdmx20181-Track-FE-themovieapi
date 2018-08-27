window.getMovies = (search) => { 
    let url = `https://www.omdbapi.com/?apikey=2f571897&s=${search}`;
    fetch(url)
    .then(response=>response.json())
    .then(response =>{  
        // console.log(response);

        painter(response.Search);
        // console.log(response.Search);
        
    })
    .catch(error=>{
        console.log(error);
    })
    }
