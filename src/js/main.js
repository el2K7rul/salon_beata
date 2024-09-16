window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const allBurgerBars = document.querySelectorAll(".burger__bars");
  const navMobile = document.querySelector(".nav");
  const allNavLinks = document.querySelectorAll(".nav-mobile__link");
  const footerDate = document.querySelector(".footer__bottom--date");
  const priceListBox = document.querySelector(".price-list__box");
  const priceListBoxSubheading = document.querySelector(".price-list__box--subheading");
  const whiteSection = document.querySelector(".white-section");
  const darkSection = document.querySelector(".dark-section");
  const allSections = document.querySelectorAll(".section");

  console.log(allBurgerBars);

  //variables
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  //functions
  const handleFooterYear = () => {
    footerDate.textContent = currentYear.toString();
  };

  const handleNav = () => {
    navMobile.classList.toggle("active");
    burger.classList.toggle("active");

    allNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("active");
        burger.classList.remove("active");
      });
    });
  };

  const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach((section) => {
      if (
        !section.classList.contains("white-section") &&
        section.offsetTop <= currentSection + 30
      ) {
        allBurgerBars.forEach((bar) => bar.classList.add("white-burger"));
      } else if (
        section.classList.contains("white-section") &&
        section.offsetTop <= currentSection + 30
      ) {
        allBurgerBars.forEach((bar) => bar.classList.remove("white-burger"));
      }
    });
  };

  // event listeners
  window.addEventListener("scroll", handleObserver);
  burger.addEventListener("click", handleNav);
  handleFooterYear();
};
