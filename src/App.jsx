import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import MoviesList from "./Components/MoviesLists";
import Movie from "./Components/Movie";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop smooth color="#6f00ff" />
      <Switch>
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route path="/lists/:listName">
          <MoviesList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
