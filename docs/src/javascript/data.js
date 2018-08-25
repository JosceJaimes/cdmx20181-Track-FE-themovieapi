
let buton= document.getElementById('btn1');
let buton1= document.getElementById('btn2');
let buton2= document.getElementById('btn3');
let peliculas = document.getElementById('info');


window.painter = (data)=>{
   
    console.log(data);
    let arrayMovies = '';
    data.forEach(movie =>{
       
    });   
};
buton.addEventListener('click', e =>{
getMovies('women');    
});
buton1.addEventListener('click', e =>{
getMovies('transformers');    
    });
buton2.addEventListener('click', e =>{
getMovies('chicken');    
});






















// {/* <p>Nombre: ${movie.imdbID}</p> */}






//     // let container = document.getElementsById('info');
//     // console.log(movies);
//     let resultMovies =[];
//     // console.log(resultMovies);
    
//     let movie = Object.values(movies);
//     // console.log(movie);
//     movie.forEach(element => {
//     let mv = element
//     // console.log(element); 
//     for( let peliculas of mv){ 
//     // console.log(peliculas);
//     let restMovies ={
//         title : peliculas.Title,
//         year : peliculas.Year,
//         type : peliculas.Type,
//         post : peliculas.Poster,
        
//     };
//     resultMovies.push(restMovies);

//     }
   
//     return resultMovies;
   
//     }); 
//     console.log(resultMovies);
    
   
    
// };   
