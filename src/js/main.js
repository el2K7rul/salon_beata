window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const navMobile = document.querySelector(".nav");
  const footerDate = document.querySelector(".footer__bottom--date");

  //variables
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  //functions
  const handleFooterYear = () => {
    footerDate.textContent = currentYear.toString();
  };

  handleFooterYear();

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMobile.classList.toggle("active");
  });
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
