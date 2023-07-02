//bottone vicino ad ogni sezione con nascondi
let bottoniNascondi = document.querySelectorAll("main button");
bottoniNascondi.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (
      window
        .getComputedStyle(e.target.parentElement.nextElementSibling)
        .getPropertyValue("display") === "block"
    ) {
      e.target.parentElement.nextElementSibling.style.display = "none";
      element.innerHTML = "Mostra";
    } else {
      e.target.parentElement.nextElementSibling.style.display = "block";
      element.innerHTML = "Nascondi";
    }
  });
});

//conto il numero di card di viaggi
document.querySelector(".jumbotron .lead a").addEventListener("click", (e) => {
  console.log(e);
  let numViaggi = document.querySelectorAll(".card");
  e.target.children[0].innerHTML = `${numViaggi.length}`;
});
