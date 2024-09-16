window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const navMobile = document.querySelector(".nav");
  const allNavLinks = document.querySelectorAll(".nav__mobile-link");
  const footerDate = document.querySelector(".footer__bottom--date");
  const priceListBox = document.querySelector(".price-list__box");
  const priceListBoxSubheading = document.querySelector(".price-list__box--subheading");
  const whiteSection = document.querySelector(".white-section");
  const darkSection = document.querySelector(".dark-section");
  const allSections = document.querySelectorAll(".section");

  console.log(priceListBoxSubheading);
  console.log(priceListBox);

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

  // event listeners

  burger.addEventListener("click", handleNav);
  handleFooterYear();
};
// let slides = document.getElementsByClassName("carousel__item");
//   function addActive(slide) {
//     slide.classList.add("carousel__item--active");
//   }

//   function removeActive(slide) {
//     slide.classList.remove("carousel__item--active");
//   }

//   addActive(slides[0]);
//   setInterval(function () {
//     for (let i = 0; i < slides.length; i++) {
//       if (i + 1 === slides.length) {
//         addActive(slides[0]);
//         setTimeout(removeActive, 5000, slides[i]);
//         break;
//       }
//       if (slides[i].classList.contains("carousel__item--active")) {
//         setTimeout(removeActive, 5000, slides[i]);
//         addActive(slides[i + 1]);
//         break;
//       }
//     }
//   }, 2500);
// };
