// let buton= document.getElementById('btn1');
// let buton1= document.getElementById('btn2');
// let buton2= document.getElementById('btn3');
// let peliculas = document.getElementById('info');


// window.painter = (data)=>{
//     peliculas.innerHTML='';
//     console.log(data);
//     // let arrayMovies = '';
//     data.forEach(movie =>{
//         peliculas.innerHTML += `<div class = "card">
//         <center>
//         <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#${movie.imdbID}">
//         <img src="${movie.Poster}">
//       </a>
//       </center>
      
   
//       <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel"></h5>
//               <button type="button" claxss="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//                 </div>
//                <div class="modal-body">
//                <p>Nombre: ${movie.Title}</p>
//                <p>Año: ${movie.Year}</p>
//                <p>Tipo: ${movie.Type}</p>
//                <p><img src="${movie.Poster}"></p>
//                </div>
//              <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>            
//              </div>
//           </div> 
//         </div>
//       </div>
    
//             <div class = "movie">
//             <p> ${movie.Title}</p>
//             </div>`;

//     });
  
// };



// buton.addEventListener('click', e =>{
// getMovies('women');    
// });
// buton1.addEventListener('click', e =>{
// getMovies('transformers');    
//     });
// buton2.addEventListener('click', e =>{
// getMovies('chicken');    
// });



let buton= document.getElementById('btn1');
let buton1= document.getElementById('btn2');
let buton2= document.getElementById('btn3');
let peliculas = document.getElementById('info');


window.painter = (data)=>{
    peliculas.innerHTML='';
    console.log(data);
    // let arrayMovies = '';
    data.forEach(movie =>{
        peliculas.innerHTML += `<div class="col-md-4">
        <div class="card">
        <div class = "estudiante">
        <p><img src="${movie.Poster}"></p>
        <a type="button" class="btn btn-primary" data-toggle="modal" data-target="#${movie.imdbID}">
        <button>
        ver datos
        </button>
      </a>

        <div class = "card">
      
      <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" claxss="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
               <div class="modal-body">
               <p>Nombre: ${movie.Title}</p>
               <p>Año: ${movie.Year}</p>
               <p>Tipo: ${movie.Type}</p>
               <p><img src="${movie.Poster}"></p>
               </div>
             <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>            
             </div>
          </div> 
        </div>
      </div>
        </button>
        </div>
        </div>
        </div> `;

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

