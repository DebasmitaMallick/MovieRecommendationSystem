const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//  api fetching will be changed from normal fetching to axios catch and try 

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.classList.add('col-3')

        movieEl.innerHTML = `
            <div class="gallery-item">
                <div class="card gallery-thumbnail" style="width:400px">
                    <img src="${IMG_PATH + poster_path}" alt="${title}">
                    <div class="overview">
                        <div class="overviewText">
                            <h3>Overview</h3>
                            ${overview}
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>
                            <span class="movie-title">${title}</span>
                            <span class="${getClassByRate(vote_average)} badge badge-secondary">${vote_average}</span>
                        </h4>
                    </div>
                </div>
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

// nav bar 

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

$(document).ready(function(){
    $(window).resize(function(){
        if($(window).width()<=1130){
            $('.movie').removeClass('col-3');
            $('.movie').addClass('col-4');
        } else {
            $('.movie').removeClass('col-4');
            $('.movie').addClass('col-3');
        }
    });
})