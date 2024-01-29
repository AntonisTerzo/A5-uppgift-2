import express from "express";
import { engine } from "express-handlebars";
import { loadMovie, loadMovies } from "./movies.js";


export const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");


app.get("/", async (req, resp) => {
    const movies = await loadMovies();
    resp.render("home", {movies});
});

app.get("/movie/:movieId", async (req, resp) => {
    const movie = await loadMovie(req.params.movieId);
    resp.render("movie", {movie});
});

app.get("/aboutUs", async (req, resp) => {
    resp.render("aboutUs");
})

app.use('/static', express.static('./static'));

export default app;