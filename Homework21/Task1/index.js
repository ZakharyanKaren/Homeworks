const button = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".input-email");
const phoneInput = document.querySelector(".input-phone");
const emailIconWrapper = document.querySelector(".email-icon-wrapper");
const phoneIconWrapper = document.querySelector(".phone-icon-wrapper");
const modal = document.querySelector(".my-modal");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
  const emailValidator =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneValidator = /^(\+?374|0)[-. ]?(\d{2})[-. ]?(\d{3})[-. ]?(\d{3})$/;

  const validEmail = emailValidator.test(
    String(emailInput.value).toLowerCase()
  );
  const validPhone = phoneValidator.test(
    String(phoneInput.value).toLowerCase()
  );

  if (validEmail && validPhone) {
    emailIconWrapper.style.display = "none";
    emailInput.style.marginBottom = "20px";
    phoneIconWrapper.style.display = "none";
    phoneInput.style.marginBottom = "20px";

    modal.style.display = "flex";

    close.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  } else {
    if (!validEmail) {
      emailIconWrapper.style.display = "initial";
      emailInput.style.margin = "0";
    } else {
      emailIconWrapper.style.display = "none";
      emailInput.style.marginBottom = "20px";
    }
    if (!validPhone) {
      phoneIconWrapper.style.display = "initial";
      phoneInput.style.margin = "0";
    } else {
      phoneIconWrapper.style.display = "none";
      phoneInput.style.marginBottom = "20px";
    }
  }
});
