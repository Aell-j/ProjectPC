const sendForm = () => {
  const form = document.querySelector(".modal")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    const sendObj = Object.fromEntries(formData.entries())

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found")
        }
        return response.json()
      })
      .then((json) => console.log(json))
      .catch((error) => {
        alert(`Ошибка отправки: ${error.message}`)
      })
      .finally(() => {
        form.reset()
      })
  })
}
sendForm()
