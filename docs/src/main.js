
window.getMovies= (search) =>{ 
    let url = `http://www.omdbapi.com/?apikey=2f571897&s=${search}`;
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























// // const url ='http://www.omdbapi.com/?s=title&apikey=2f571897';
// // window.onload =()=>{ 
// // fetch (url)
// // .then(res => res.json())
// // .then(data =>{
// // // console.log(data);
// // getMovies(data);
// // // console.log(data);

// // })
// // .catch(error=>{
// //     console.log(error)
// // });
// // };

// window.onload = (getMovies)=>{ 
//     // let movies ="";
// return `http://www.omdbapi.com/?s=apikey=2f571897`;
// getMovies.then(res => res.json())
// console.log(getMovies);
   
    
// // const api =`http://www.omdbapi.com/?s=${movies}apikey=2f571897`
// // fetch (api)
// getMovies.then(res => res.json())
// // .then(data =>{
// // console.log(data);
// // getMovies(data);
// // console.log(data);

// // })
// // .catch(error=>{
// //     console.log(error)
// // });
// };