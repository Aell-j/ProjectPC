const modalWindow = document.querySelector(".modal")
const buttonModal = document.querySelectorAll(".modal_button")
const modalClose = document.querySelector(".modal_close")
const body = document.querySelector("body")
const contents = document.querySelectorAll(".program-line_content")

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

const allDescr = document.querySelectorAll(".program-line_descr")

contents.forEach((e) => {
  const title = e.querySelector(".program-line_title")
  const descr = e.querySelector(".program-line_descr")

  title.addEventListener("click", () => {
    allDescr.forEach((e) => {
      e.classList.remove("active")
    })
    descr.classList.add("active")
  })
})
