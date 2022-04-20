function wordCounter() {
    let textAreaValue = document.getElementById('text-area').value
    let spanText = document.querySelector('span')
    spanText.innerHTML = textAreaValue.split(' ').length
}
let btnCount = document.querySelector('button')
btnCount.addEventListener('click', wordCounter)

