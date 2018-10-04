if (!window.analytics) {
  console.log('analytics.js is currently commented out!');
}

document.addEventListener('click', (event) => {
  console.log(event.target.id);
  let game = event.target.id;
  // document.getElementById()
  if (game) {
   
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        console.log(this)
          document.getElementById("demo").innerHTML =
          this.responseText;
        }

      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
    }
  }
});