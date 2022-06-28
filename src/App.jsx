import { MovieDetails } from "./pages/MovieDetails"
import { LandingPage } from "./pages/LandingPage"
import styles from './App.module.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom" // No viene por defecto hay que instalar la dependencia

export function App(){
    return <Router>
        <header>
            <Link to="/">
                <h1 className={styles.title}>🍿🍿 Movies 🍿🍿</h1>
            </Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId">
                    <MovieDetails></MovieDetails>
                </Route>
                <Route exact path="/">
                    <LandingPage></LandingPage>
                </Route>
                <Route path="/">404</Route>
            </Switch>
        </main>
    </Router>
}