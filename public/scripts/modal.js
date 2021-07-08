export default function Modal() {

  // variavel para o wrapper
  const modalWrapper = document.querySelector(".modal-wrapper")

  // botão de cancelar
  const cancelButton =  document.querySelector(".button.cancel")
  cancelButton.addEventListener("click", close)
  
  // adcionar a class active no modal
  function open() {
    modalWrapper.classList.add("active");
  }
  // tirar a class active do modal
  function close() {
     modalWrapper.classList.remove("active");
  }

  return { open, close };
}
