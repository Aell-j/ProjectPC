const smoothScroll = () => {
  const navBar = document.querySelector(".header_nav")
  const links = navBar.querySelectorAll("a")

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()

      const section = document.querySelector(link.getAttribute("href"))
      if (section) {
        seamless.scrollIntoView(section, {
          block: "start",
          behavior: "smooth",
          inline: "center",
        })
      }
    })
  })
}
smoothScroll()
