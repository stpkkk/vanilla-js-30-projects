// select all buttons, then forEach, looked over this buttons, for each button addEventListener, then using event (e) object and getting currentTarget.classList

// set initial count
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns); //getting NodeList

btns.forEach((item) => {
  item.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList); //узнаем по какой кнопке мы кликаем
    const styles = e.currentTarget.classList; // обращаемся к стилям этой кнопки
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "white";
    }
    value.textContent = count;
  });
}); // (e)- access my event object to check which button im clicking
