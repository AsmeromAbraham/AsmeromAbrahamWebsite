function genji() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("genjiinfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/genji.txt", true);
  xhttp.send();
}

function reinhardt() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("reinhardtinfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/reinhardt.txt", true);
  xhttp.send();
}

function zarya() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("zaryainfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/zarya.txt", true);
  xhttp.send();
}

function lucio() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("lucioinfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/lucio.txt", true);
  xhttp.send();
}

function ana() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("anainfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/ana.txt", true);
  xhttp.send();
}

function mccree() {
  var xhttp = new XMLHttpRequest();
  var txt;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mccreeinfo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "text/mccree.txt", true);
  xhttp.send();
}
