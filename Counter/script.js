const display = document.querySelector('.counter')
const decreaseBtn = document.querySelector('.btn-decrease')
const increaseBtn = document.querySelector('.btn-increase')
const resetBtn = document.querySelector('.btn-reset')

decreaseBtn.addEventListener('click', decrease)
increaseBtn.addEventListener('click', increase)
resetBtn.addEventListener('click', reset)

let count = 0;


function decrease(){
    count -= 1
    display.textContent = count
    if(count < 0){
        display.style.color = "red"
    }
}

function increase(){
    count += 1
    display.textContent = count
    if(count > 0){
        display.style.color = "green"
    }
}

function reset(){
    count = 0
    display.textContent = count
    display.style.color = "rgba(15, 23, 63, 0.993)"
}