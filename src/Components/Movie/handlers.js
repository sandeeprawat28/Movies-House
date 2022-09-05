import Swal from 'sweetalert2'

export default function addMovieToList(movie, listId, listName) {
  const storage = JSON.parse(localStorage.lists);
  const list = storage.find((list) => list.id === listId);
  const id = movie.id;

  if (list.movies.some((movie) => movie.id === id)) {
    Swal.fire(`
      '${movie.original_title}' was added to ${listName}
    `);
  } else {
    list.movies.push(movie);
    localStorage.setItem("lists", JSON.stringify(storage));
    Swal.fire (`
      '${movie.original_title}' added to ${listName}
    `);
  }
}
