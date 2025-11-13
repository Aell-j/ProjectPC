const accordeon = () => {
  const body = document.querySelector("body")
  const contents = document.querySelectorAll(".program-line_content")
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
}

accordeon()
