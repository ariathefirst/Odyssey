function dropFunction() {
    document.getElementById("tripDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("tripDropdown");
      // if (tripDropdown.classList.contains('show')) {
      //   tripDropdown.classList.remove('show');
      // }
  }
}