
const searchClick = () => {
    document.getElementsByClassName('search')[0].classList.toggle("visible");
}

const moveRight = () => {
    document.getElementsByClassName('frontCard')[0].classList.toggle("moveRight");
    document.getElementsByClassName('backCard')[0].classList.toggle("moverLeft");
}