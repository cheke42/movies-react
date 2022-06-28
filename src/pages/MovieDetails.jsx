import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MovieDetail.module.css"


export function MovieDetails(){

    const {movieId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    const [videos, setVideos] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        get(`movie/${movieId}`)
        .then(data => {
            setMovie(data)
            setIsLoading(false)
        })
    },[movieId])

    useEffect(()=>{
        get(`movie/${movieId}/videos`)
        .then(data =>{
            console.log('videos:')
            console.log(data)
        })
    },[movieId])

    if(isLoading){
        return <Spinner />
    }
    
    //const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    const imageUrl = getMovieImg(movie.poster_path,500) 
    
    const backdropUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    return (
        <>
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Release date: </strong>{movie.release_date}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
        <div className={styles.backdropContainer}>
            <img className={styles.backdropImg} src={backdropUrl} alt="" />
        </div>
        </>
    )
}