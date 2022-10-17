const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //data
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //.color from html class

btn.addEventListener("click", () => {
  //get random number between 0 - 3, потому что массив начинается с 0
  const randomNumber = getRandomNumber(); //from array
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; //чтобы вывести hex цвета, color это класс в span
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length); //не включая 4 возвратит от 0 - 3
};
