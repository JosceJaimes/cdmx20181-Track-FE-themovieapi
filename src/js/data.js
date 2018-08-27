let buton= document.getElementById('btn1');
let buton1= document.getElementById('btn2');
let buton2= document.getElementById('btn3');
let peliculas = document.getElementById('info');


window.painter = (data)=>{
    peliculas.innerHTML='';
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
