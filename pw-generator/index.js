const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+}{|[]";
const charset = characters.split("");

const generatePassword = (charset, length = 16) => {
  let pw = "";
  for (let i = 0; i < length; i++) {
    pw += charset[Math.floor(Math.random() * charset.length)];
  }
  return pw;
};

const generateButton = document.querySelector(".generate");
const items = document.querySelectorAll(".passwords li");

generateButton.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    items[i].textContent = generatePassword(charset);
  }
});
