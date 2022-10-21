let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "gold";
    }

    value.textContent = count;
  });
});
