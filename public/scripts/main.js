import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDesc = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// botao marcar como lida
const checkButtons = document.querySelectorAll(".actions a.check");
checkButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// botão excluir
const deleteButton = document.querySelectorAll(".actions a.delete");
deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true) {
  const text = check ? "Marcar como lida" : "Excluir";

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDesc.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`;
  modalButton.innerHTML = `sim, ${text.toLocaleLowerCase()}`;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");
  // abrir modal
  modal.open();
}
