



const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})





// EIIIIIIIIIIIIII VOLTA

let tituloDinamico = document.title;
window.addEventListener("blur", () => {
  document.title = "Fica aqui comigo! 😭"
})

window.addEventListener("focus", () => {
  document.title = tituloDinamico
})













