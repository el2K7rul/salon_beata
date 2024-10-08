window.onload = function () {
  //selectors
  const burger = document.querySelector(".burger");
  const allBurgerBars = document.querySelectorAll(".burger__bars");
  const body = document.querySelector(".body");
  const navMobile = document.querySelector(".nav");
  const navDesktop = document.querySelector(".nav-desktop");
  const allNavLinks = document.querySelectorAll(".nav-mobile__link");
  const arrowUp = document.querySelector(".arrowup");
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
  const handleArrowUp = () => {
    const currentSection = window.scrollY;
    if (currentSection > 480) {
      arrowUp.classList.add("active");
    } else {
      arrowUp.classList.remove("active");
    }
    // console.log(window.scrollY);
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
    handleArrowUp();
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

  // event listeners
  window.addEventListener("scroll", handleObserver);
  burger.addEventListener("click", handleNav);
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkMail(email);
    checkTelNum(telNum);
  });

  handleFooterYear();

  // ------------- GALLERY -----------------------------------

  const carousel = document.querySelector(".carousel");
  const workBtnOne = document.querySelector(".btn-one");
  const workBtnTwo = document.querySelector(".btn-two");
  const workBtnThree = document.querySelector(".btn-three");
  const workBtnFour = document.querySelector(".btn-four");
  const gallery = document.querySelector(".gallery");
  const images = carousel.querySelectorAll(".img");
  const arrowIcons = document.querySelectorAll(".arrow");
  const thumbnailsCarousel = document.querySelector(".carousel-thumbnails");
  const thumbnailImages = document.querySelectorAll(".thumbnail-img");

  let index = 4;

  function handleArrowAction(icon) {
    if (icon.id === "left" && index > 0) {
      index--;
    } else if (icon.id === "left" && index === 0) {
      index = 9;
      index--;
    } else if (icon.id === "right" && index < 8) {
      index++;
        // thumbnailImages.forEach((image) => (image.style.transform = "translateX(-130px)"));
    } else {
      index = 0;
      index * 2;
    }

    handleDisplayImage(index);
  }

  function handleDisplayImage(currentIndex) {
    images.forEach((image, index) => {
      if (currentIndex === index) {
        image.classList.add("show-image"), handleActivateThumbnail(index);
      } else {
        image.classList.remove("show-image");
      }
    });
  }

  function handleActivateThumbnail(currentIndex) {
    thumbnailImages.forEach((thumbnail, index) =>
      currentIndex === index
        ? thumbnail.classList.remove("thumbnail-disabled")
        : thumbnail.classList.add("thumbnail-disabled")
    );
  }

  // event listeners -------------------------------------------------------------------

  thumbnailImages.forEach((thumbnail, thumbnailIndex) =>
    thumbnail.addEventListener("click", () => (index = thumbnailIndex) && handleDisplayImage(index))
  );

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => handleArrowAction(icon));
  });

  document.addEventListener("click", (e) => {
    if (
      (e.target.classList.contains("gallery") && body.classList.contains("disable-scroll")) ||
      body.classList.contains("carousel")
    ) {
      gallery.classList.remove("display-gallery");
      body.classList.remove("disable-scroll");
      navDesktop.classList.remove("nav-transition");
    }
  });

  workBtnOne.addEventListener("click", () => {
    {
      body.classList.add("disable-scroll");
      gallery.classList.add("display-gallery");
      navDesktop.classList.add("nav-transition");
    }
  });
};
