const modalOverlay = document.querySelector('.modal-overlay')
const modalMaximize = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const courseId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector(".maximize-modal").addEventListener("click", function () {
    if (modalMaximize.classList.contains('maximize')) {
        modalMaximize.classList.remove('maximize')
    }
    modalMaximize.classList.add('maximize')
})

document.querySelector(".close-modal").addEventListener("click", function () {
    modalMaximize.classList.remove('maximize')
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})