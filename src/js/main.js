window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const allBurgerBars = document.querySelectorAll(".burger__bars");

  const navMobile = document.querySelector(".nav");
  const allNavLinks = document.querySelectorAll(".nav-mobile__link");
  const footerDate = document.querySelector(".footer__bottom--date");
  const allSections = document.querySelectorAll(".section");
  const errorMsgMail = document.querySelector(".error-msg-mail");
  const errorMsgTel = document.querySelector(".error-msg-tel");
  const email = document.querySelector(".email");
  const telNum = document.querySelector(".telNum");

  const submitBtn = document.querySelector(".submit");

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

  // const checkTelNum = (telNum) => {
  //   const validTel = /^[?<!\w][\[?[\+|00]?48\]?]?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}[?!\w]/;

  //   if (validTel.test(telNum.value)) {
  //     clearError(telNum);
  //   } else {
  //     showError(telNum, "wpisz poprawny nr tel.");
  //   }
  // };

  const checkMail = (email) => {
    const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (validMail.test(email.value)) {
      clearError(email);
    } else {
      showError(email, "wpisz poprawny adres email.");
    }
  };
  const clearError = (el) => {
    const formBox = el.errorMsgMail;
    formBox.classList.remove("error-display");
    errorMsgMail.textContent = "";
  };

  const showError = (input, msg) => {
    errorMsgMail.classList.add("error-display");
    errorMsgMail.textContent = msg;
  };

  const checkForm = (el) => {
    if (el.value === "") {
      showError(el, "wpisz mail");
      showError(el, "wpisz tel");
    } else {
      // clearError(el);
      checkMail(email);
      checkTelNum(telNum);
    }
  };

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
