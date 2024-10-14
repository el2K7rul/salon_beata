window.onload = function () {
  //selectors
  const body = document.querySelector(".body");
  const burger = document.querySelector(".burger");
  const allBurgerBars = document.querySelectorAll(".burger__bars");
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

  // footer
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const handleFooterYear = () => {
    footerDate.textContent = currentYear.toString();
  };

  handleFooterYear();
  // NAV

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
        section.offsetTop <= currentSection + 100
      ) {
        allBurgerBars.forEach((bar) => bar.classList.remove("white-burger"));
      }
    });
    handleArrowUp();
  };

  window.addEventListener("scroll", handleObserver);
  burger.addEventListener("click", handleNav);

  // form validator

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
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkMail(email);
    checkTelNum(telNum);
  });

  // ------------- GALLERY -----------------------------------

  const carousel = document.querySelector(".carousel");
  const workBtnOne = document.querySelector(".btn-one");
  const workBtnTwo = document.querySelector(".btn-two");
  const workBtnThree = document.querySelector(".btn-three");
  const workBtnFour = document.querySelector(".btn-four");
  const haircutGalleryThumbnail = document.querySelectorAll(".thumbnail-img");
  const colorGallery = document.querySelector(".gallery-color");
  const barberGallery = document.querySelector(".gallery-barber");
  const styleGallery = document.querySelector(".gallery-style");
  const images = carousel.querySelectorAll(".img");
  const arrowIcons = document.querySelectorAll(".arrow");

  function handleArrowAction(icon) {
    if (icon.classList.contains("left-btn")) {
      console.log("left");
    } else if (icon.classList.contains("right-btn")) {
      console.log("right");
    }
  }

  const createImage = (thumbnail, index) => {
    const img = document.createElement("img");
    img.src = thumbnail.src;
    img.id = index;
    img.classList.add("img");
    carousel.appendChild(img);
    setTimeout(() => {
      img.classList.add("show-image");
    }, 1);
  };

  function handleDisplayImage(thumbnail, index) {
    if (carousel.childElementCount === 0) {
      createImage(thumbnail, index);
    } else {
      thumbnail.classList.remove("show-image");
      carousel.removeChild(carousel.firstElementChild);
      createImage(thumbnail, index);
    }
  }

  function handleActivateThumbnail(currentIndex) {
    haircutGalleryThumbnail.forEach((thumbnail, index) =>
      currentIndex === index
        ? thumbnail.classList.remove("thumbnail-disabled")
        : thumbnail.classList.add("thumbnail-disabled")
    );
  }

  // event listeners -------------------------------------------------------------------

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => handleArrowAction(icon));
  });

  haircutGalleryThumbnail.forEach((thumbnail, index) =>
    thumbnail.addEventListener("click", () => {
      handleDisplayImage(thumbnail, index);
      handleActivateThumbnail(index);
    })
  );

  document.addEventListener("click", (e) => {
    if (
      (e.target.classList.contains("gallery") && body.classList.contains("disable-scroll")) ||
      body.classList.contains("carousel")
    ) {
      haircutGallery.classList.remove("display-gallery");
      body.classList.remove("disable-scroll");
      navDesktop.classList.remove("nav-transition");
    }
  });

  workBtnOne.addEventListener("click", () => {
    {
      body.classList.add("disable-scroll");
      haircutGallery.classList.add("display-gallery");
      navDesktop.classList.add("nav-transition");
    }
  });
};

//---------------------------------fadeIN anim ---------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll(".hidden");
const hiddenElementsRight = document.querySelectorAll(".hidden-right");
const hiddenVanishedElements = document.querySelectorAll(".hidden-vanished");
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenVanishedElements.forEach((el) => observer.observe(el));
