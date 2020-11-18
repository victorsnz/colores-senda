var colors = [
    {"code":"1A", "name":"NEGRO ONIX BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2A", "name":"AZUL TRAFUL BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2B", "name":"AZUL NAUTICO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2F", "name":"AZUL LACAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2G", "name":"AZUL NAHUEL BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2H", "name":"AZUL GLACIAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2I", "name":"AZUL NASSAU BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2L", "name":"AZUL BILBAO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2M", "name":"AZUL DALLAS BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"2N", "name":"AZUL CELESTE BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"3A", "name":"ROJO REGENCIA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"3A", "name":"ROJO TIZIANO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"3B", "name":"ROJO COLONIAL BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"3D", "name":"ROJO SPORT BICAPA", "photo":"./img/photos/rojo-sport.jpg"},
    {"code":"3H", "name":"ROJO BARCELONA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"3I", "name":"ROJO ESTILO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"5B", "name":"VERDE CRISTAL BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"5G", "name":"VERDE ESMERALDA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"5H", "name":"VERDE CASCADA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"5J", "name":"VERDE PINO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"5K", "name":"VERDE TAHITI BICAPA", "photo":"./img/photos/verde-tahiti.jpg"},
    {"code":"7D", "name":"PLATINO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"7J", "name":"GRIS NUBE BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"7K", "name":"GRIS MERCURIO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"7L", "name":"GRIS ALBATROS BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"7R", "name":"GRIS COPENHAGEN BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"8D", "name":"BEIGE ECUATORIAL BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AC", "name":"ROJO CAMBRIDGE BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AD", "name":"GRIS JAGUAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AE", "name":"ROJO MUNICH BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AG", "name":"AZUL MIRAMAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AK", "name":"GRIS ANDINO BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AL", "name":"VERDE FILADELFIA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AQ", "name":"VERDE FLORESTA BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AX", "name":"PLATA LUNAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AY", "name":"NEGRO DAKAR BICAPA", "photo":"./img/photos/SinFoto.png"},
    {"code":"AZ", "name":"AZUL DENVER BICAPA", "photo":"./img/photos/SinFoto.png"}
];


function display() {

  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var h = document.createElement("THEAD");
  h.setAttribute("id","myThead");
  document.body.appendChild(h);
  document.getElementById("myTable").appendChild(h);
  
  var th1 = document.createElement("TD");
  th1.appendChild(document.createTextNode("Código"));
  h.appendChild(th1);

  var th2 = document.createElement("TD");
  th2.appendChild(document.createTextNode("Nombre"));
  h.appendChild(th2);

  var th3 = document.createElement("TD");
  th3.appendChild(document.createTextNode("Foto"));
  h.appendChild(th3);

  var i, len;
  for (i = 0, len = colors.length; i < len; ++i) {
    var r = document.createElement("TR");
    r.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(r);
    var d1 = document.createElement("TD");
    d1.appendChild(document.createTextNode(colors[i].code));
    r.appendChild(d1);

    var d2 = document.createElement("TD");
    d2.appendChild(document.createTextNode(colors[i].name));
    r.appendChild(d2);

    var d3 = document.createElement("TD");
    d3.innerHTML = '<button id="myBtn'+i+'" class="btn-photo" value="' + colors[i].photo + '" onclick="openPhoto(id)">Ver Foto</button>';
    r.appendChild(d3);
  }
}
display();

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// 

function openPhoto(id) {
  modal.style.display = "block";
  var imgLink = document.getElementById(id).value;
  console.log(imgLink);
  document.getElementById("my-modalbody").innerHTML = '<img src="' + imgLink + '" alt=""/>';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
