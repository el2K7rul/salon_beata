window.onload = function () {
  const burger = document.querySelector(".burger");
  const navMobile = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMobile.classList.toggle("active");
  });
};
