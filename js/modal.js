const modalWindow = document.querySelector(".modal")
const buttonModal = document.querySelectorAll(".modal_button")
const modalClose = document.createElement("img")

modalClose.src = "../img/cross.svg"
modalClose.style.cssText = `
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 4rem;
  height: 4rem;
  cursor:pointer;
`
const modalInner = modalWindow.querySelector(".modal_inner")
modalInner.style.position = "relative"
modalInner.append(modalClose)

buttonModal.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.style.display = "flex"
    body.classList.add("noscroll")
  })
})

modalWindow.addEventListener("click", (e) => {
  const isModal = e.target.closest(".modal_inner")

  if (!isModal) {
    modalWindow.style.display = "none"
  }
})

modalClose.addEventListener("click", () => {
  modalWindow.style.display = "none"
  body.classList.remove("noscroll")
})
