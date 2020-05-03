const gridSize = 3;
var grillaJs = document.createElement("div");
griller = "";

function armarGrilla(size) {
  grillaJs.setAttribute("class", "grillaJs");
  for (h = 0; h < size; h++) {
    griller += `<div class= "fila"> `;
    for (i = 0; i < size; i++) {
      griller += `<div class="cuadrado" data-id=${i} onclick="ays()"> </div>`;
    }
  }
  griller += `</div> `;
  grillaJs.innerHTML = griller;
  console.log(grillaJs);
  document.querySelector("#grilla").appendChild(grillaJs);
  //document.querySelector("#grilla").innerHTML = "<h1>culo</h1>";
}

armarGrilla(gridSize);
