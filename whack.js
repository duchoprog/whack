document.addEventListener("DOMContentLoaded", () => {
  var timer = 20;
  var bifes = 0;
  var donde = null;
  const castigados = document.getElementById("castigados");
  const tiempo = document.getElementById("tiempo");
  document.querySelectorAll(".cuadrado").forEach((element) => {
    element.addEventListener("mouseup", (e) => pegar(e));
    console.log(element);
  });

  var bichos = setInterval(asomar, 1000);

  function terminar() {
    console.log("terminar");
    document.querySelectorAll("img").forEach((element) => {
      element.classList.remove("show");
    });

    clearInterval(bichos);
    document.getElementById("resultado").classList.add("show");
    document.querySelector("#resultado>span").innerText = bifes;
  }
  function asomar() {
    document.querySelectorAll("img").forEach((element) => {
      element.classList.remove("show");
    });
    var newDonde = Math.floor(Math.random() * 9);
    if (newDonde != donde) {
      donde = newDonde;
      document
        .querySelector(`[data-id='${donde}'] > img`)
        .classList.add("show");
      document
        .querySelector(`[data-id='${donde}'] > img`)
        .setAttribute("data-id", donde);
    } else {
      asomar();
    }
  }
  function pegar(e) {
    console.log(e.target.dataset.id, donde);
    if (e.target.dataset.id == donde) {
      bifes++;
      castigados.innerText = bifes;
      asomar();
    }
  }

  function timeControl() {
    timer--;
    console.log(timer);
    tiempo.innerText = timer;
    if (timer == 0) {
      clearInterval(titimer);
      terminar();
    }
  }
  var titimer = setInterval(timeControl, 1000);
});
