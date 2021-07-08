import Modal from "./modal.js";

const modal = Modal();

// pegar todos os botões que tem a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
  //   conferir se o butão recebeu click
  button.addEventListener("click", event => {
    // abrir modal
    modal.open();
  });
});
