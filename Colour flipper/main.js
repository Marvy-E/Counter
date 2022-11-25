const colors  = ["Red", "#f15025", "Green", "rdgba(133,122,200)", "cornflowerblue", "#fff", "#00AEB9", "#CBEDEE", "#F7AD19", "#429EBD", "#C17F8B", "#F73668", "#AF87CE", "#EA1A7F", "#A8F387", "#A8320A", "#1F8DD6", "#fae6ff", "#E28869", "#EA1A7F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const Random = getRandomNumber();
    document.body.style.backgroundColor = colors[Random]
    color.textContent = colors[Random]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}