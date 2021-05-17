const $skip = document.querySelector(".skip");
const $text = document.querySelector(".text");
const $encrypt = document.querySelector(".encrypt");
const $result = document.querySelector(".result");

$encrypt.addEventListener("click", () => {
  let cipherEncrypt = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let skip = Number($skip.value);
  let text = $text.value.toUpperCase();
  let textArray = text.split("");

  const newArray = textArray.map((element) => {
    for (let i = 0; i < cipherEncrypt.length; i++) {
      if (cipherEncrypt[i] === element) {
        element = cipherEncrypt[(i += skip)];
      }
    }

    return element;
  });

  const newText = newArray.join("");

  $result.innerHTML = newText;
});
