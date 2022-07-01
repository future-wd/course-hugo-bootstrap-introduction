// target year div in footer
const year = document.getElementById('js-year')
// conditionally update the div with current year on runtime
// to avoid error
if (year) {
  year.innerHTML = new Date().getFullYear();
}