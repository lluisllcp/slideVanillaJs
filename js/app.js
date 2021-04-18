let itemSlider = document.getElementsByClassName('item-slider');
let btnAnt = document.getElementsByClassName('boton-slider-ant');
let btnPost = document.getElementsByClassName('boton-slider-post');

for (let i = 0; i < itemSlider.length; i++) {
  btnAnt[i].addEventListener('click', () => {
    let MovementFlag = window.getComputedStyle(itemSlider[i]).getPropertyValue("transform");
    if (MovementFlag == "none") {
      itemSlider[i].style.transition = ".8s";
      itemSlider[i].classList.add('mou-dreta');
      setTimeout(() => {
        itemSlider[i].insertBefore(itemSlider[i].lastElementChild, itemSlider[i].firstChild);
        itemSlider[i].style.transition = "none";
        itemSlider[i].classList.remove('mou-dreta');
      }, 800);
    }
  });
  btnPost[i].addEventListener('click', () => {
    let MovementFlag = window.getComputedStyle(itemSlider[i]).getPropertyValue("transform");
    if (MovementFlag == "none") {
      itemSlider[i].style.transition = ".8s";
      itemSlider[i].classList.add('mou-esq');
      setTimeout(() => {
        itemSlider[i].appendChild(itemSlider[i].firstElementChild);
        itemSlider[i].style.transition = "none";
        itemSlider[i].classList.remove('mou-esq');
      }, 800);
    }
  });
}