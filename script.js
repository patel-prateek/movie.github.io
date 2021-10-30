const API_KEY= "api_key=55a659e7021b19d4c138ddfe5496ae8b";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?' + API_KEY;
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=55a659e7021b19d4c138ddfe5496ae8b&query='
const form = document.getElementById('form');
const search = document.getElementById('search');



function getdata(url){
    fetch(url).then(res => res.json()).then(data=>{
        showMovies(data.results);
    })
}

getdata('https://api.themoviedb.org/3/discover/movie?api_key=55a659e7021b19d4c138ddfe5496ae8b');

function showMovies(data){
    main.innerHTML='';
   data.forEach(element => {
       let {title,vote_average,overview,poster_path} = element;
        let movieEl = document.createElement('div')
        movieEl.innerHTML = `
        <div class="moviebox">
        <img src="${IMG_BASE+ poster_path}" alt="img">
            <div class="movie-info">
                <h5>${title}</h5>
                <span class="green">${vote_average}</span>
            </div>

            <div class="overview">
            <h4>Overview</h4>
            ${overview}
            </div>`

        main.appendChild(movieEl);   
   });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(search.value)
    if(search.value)
    getdata(searchUrl + search.value);
    else{
getdata('https://api.themoviedb.org/3/discover/movie?api_key=55a659e7021b19d4c138ddfe5496ae8b');
    }
})