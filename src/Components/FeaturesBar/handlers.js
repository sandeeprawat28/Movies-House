import Swal from 'sweetalert2'

export const toggleSideBar = (setToggleSideBar) => {
  setToggleSideBar((prevState) => !prevState);
};

export const inputChange = (inputValue, setInput) => {
  setInput(inputValue);
};

export const search = (setQuery, input, setInput) => {
  if (input.trim()) {
    setQuery(input);
    setInput("");
  } else Swal.fire ({
    icon: 'error',
    title: 'Oops...',
    timer: 2500,
    showConfirmButton: false,
    text: 'Please enter valid movie!',
  })
};
