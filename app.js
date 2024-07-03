const inputs = document.querySelectorAll(".form-input");
const form = document.querySelector("form");
const queryTypes = document.querySelectorAll(".query-type");
queryTypes.forEach((queryType) => {
  queryType.addEventListener("click", () => {
    queryType.firstElementChild.checked = true;
  });
});
form.addEventListener(
  "hover",
  (e) => {
    e.target.style.borderColor = "hsl(148, 38%, 91%)";
  },
  true
);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  // Validate Inputs
  const isValid = validateInputs(data);
  // Notify Success Message
  if (isValid) {
    const notification = document.querySelector(".notification");
    notification.classList.add("show-notification");
    setTimeout(() => {
      notification.classList.remove("show-notification");
    }, 3000);
    // Reset the form
    e.currentTarget.reset();
  }
});

const validateInputs = ({
  firstName,
  lastName,
  email,
  queryType,
  message,
  consent,
}) => {
  let isValid = true;
  if (firstName.length === 0) {
    const element = document.querySelector("#firstName");
    element.nextElementSibling.classList.add("show-message");
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#firstName");
    element.nextElementSibling.classList.remove("show-message");
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (lastName.length === 0) {
    const element = document.querySelector("#lastName");
    element.nextElementSibling.classList.add("show-message");
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#lastName");
    element.nextElementSibling.classList.remove("show-message");
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    const element = document.querySelector("#email");
    element.nextElementSibling.classList.add("show-message");
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#email");
    element.nextElementSibling.classList.remove("show-message");
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!queryType) {
    const element = document.querySelector("#queryType");
    element.parentElement.parentElement.nextElementSibling.classList.add(
      "show-message"
    );
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#queryType");
    element.parentElement.parentElement.nextElementSibling.classList.remove(
      "show-message"
    );
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (message.length === 0) {
    const element = document.querySelector("#message");
    element.nextElementSibling.classList.add("show-message");
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#message");
    element.nextElementSibling.classList.remove("show-message");
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  if (!consent) {
    const element = document.querySelector("#consent");
    element.parentElement.parentElement.lastElementChild.classList.add(
      "show-message"
    );
    isValid = false;
    element.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    const element = document.querySelector("#consent");
    element.parentElement.parentElement.lastElementChild.classList.remove(
      "show-message"
    );
    element.style.borderColor = "hsl(186, 15%, 59%)";
  }
  return isValid;
};
