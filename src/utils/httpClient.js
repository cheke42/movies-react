const 
API = 'https://api.themoviedb.org/3/',
TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2ViODM3OGRhMTBmOTg3NmM0NTU1NzIwNWFlNjQyMiIsInN1YiI6IjYyYjhlNGFiOGMwYTQ4MDA2NjczODMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gFHdZfrw_1fv_hoRponD8I93Nzu-wm7BufbXOypHM58'                

export function get(path){
    return fetch(`${API}${path}`,{
            headers: {
                Authorization: TOKEN,
                'Content-Type': 'application/json;charset=utf-8'
            }
       })
       .then(result => result.json())
}