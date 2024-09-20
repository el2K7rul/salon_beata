window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const allBurgerBars = document.querySelectorAll(".burger__bars");
  const body = document.querySelector(".body");
  const navMobile = document.querySelector(".nav");
  const allNavLinks = document.querySelectorAll(".nav-mobile__link");
  const footerDate = document.querySelector(".footer__bottom--date");
  const allSections = document.querySelectorAll(".section");
  const errorMsg = document.querySelector(".error-msg");
  const errorMsgTel = document.querySelector(".error-msg-tel");
  const email = document.querySelector(".email");
  const telNum = document.querySelector(".telNum");

  const submitBtn = document.querySelector(".submit");

  //variables
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  //functions

  console.log(body);

  const handleFooterYear = () => {
    footerDate.textContent = currentYear.toString();
  };

  const handleNav = () => {
    navMobile.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("disable-scroll");

    allNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("disable-scroll");
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

  const checkTelNum = (telNum) => {
    const validNum = /^[0-9\+]{8,13}$/;

    if (validNum.test(telNum.value)) {
      clearError(errorMsgTel);
    } else {
      showError(errorMsgTel, "wpisz poprawny nr tel.");
    }
  };

  const checkMail = (email) => {
    const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (validMail.test(email.value)) {
      clearError(errorMsg);
    } else {
      showError(errorMsg, "wpisz poprawny adres email.");
    }
  };
  const clearError = (el) => {
    const formBox = el;
    formBox.classList.remove("error-display");
    formBox.textContent = "";
  };

  const showError = (input, msg) => {
    const formBox = input;
    formBox.classList.add("error-display");
    formBox.textContent = msg;
  };

  // const checkForm = (el) => {
  //   if (el.value === "") {
  //     showError(el, "wpisz mail");

  //   } else {

  //     checkMail(email);
  //     checkTelNum(telNum);
  //   }
  // };

  // event listeners
  window.addEventListener("scroll", handleObserver);
  burger.addEventListener("click", handleNav);
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // checkForm(email, telNum);
    checkMail(email);
    checkTelNum(telNum);
  });
  handleFooterYear();
};
