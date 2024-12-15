let text = document.querySelector("#txt");
let input_btn = document.querySelector("#input-txt");
let output_empty_container = document.querySelector("#output-text");
let clear_btn = document.querySelector("#clear-txt");

input_btn.addEventListener("click", function () {
  if (!text.value.trim()) {
    //This condition outputs a text content "type something out" when you press the ENTER without any value in it
    output_empty_container.textContent = "Type something out!";
  } else {
    output_empty_container.textContent = text.value; //This is the code that will put a value inside the empty div (output-text)
  }
});

clear_btn.addEventListener("click", function () {
  output_empty_container.textContent = "";
  text.value = "";
});
