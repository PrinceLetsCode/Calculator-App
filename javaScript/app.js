var theme_btn_1 = document.querySelector("#tn-1");
var theme_btn_2 = document.querySelector("#tn-2");
var theme_btn_3 = document.querySelector("#tn-3");
var op_buttons = document.querySelectorAll(".op-btn");
var result_disp = document.querySelector(".result-display");
var reset_button = document.querySelector(".reset");
var delete_button = document.querySelector(".delete");
var equals_button = document.querySelector(".equals");

var number_string = "";
op_buttons.forEach((op_btn) => {
  op_btn.addEventListener("click", (event) => {
    number_string = number_string + op_btn.textContent;
    result_disp.textContent = number_string;
    // console.log(op_btn.textContent);
  });
});

theme_btn_1.addEventListener("click", () => {
  document.querySelector("html").classList.add("theme-1");
  document.querySelector("html").classList.remove("theme-3");
  document.querySelector("html").classList.remove("theme-2");

  theme_btn_1.style.backgroundColor = "var(--equals-toggle)";
  theme_btn_2.style.backgroundColor = "var(--btngrid-toggle)";
  theme_btn_3.style.backgroundColor = "var(--btngrid-toggle)";
});

theme_btn_2.addEventListener("click", () => {
  document.querySelector("html").classList.add("theme-2");
  document.querySelector("html").classList.remove("theme-1");
  document.querySelector("html").classList.remove("theme-3");

  theme_btn_2.style.backgroundColor = "var(--equals-toggle)";
  theme_btn_1.style.backgroundColor = "var(--btngrid-toggle)";
  theme_btn_3.style.backgroundColor = "var(--btngrid-toggle)";
});

theme_btn_3.addEventListener("click", () => {
  document.querySelector("html").classList.add("theme-3");
  document.querySelector("html").classList.remove("theme-1");
  document.querySelector("html").classList.remove("theme-2");

  theme_btn_3.style.backgroundColor = "var(--equals-toggle";
  theme_btn_1.style.backgroundColor = "var(--btngrid-toggle)";
  theme_btn_2.style.backgroundColor = "var(--btngrid-toggle)";
});

reset_button.addEventListener("click", () => {
  number_string = "";
  result_disp.textContent = "0";
});

delete_button.addEventListener("click", () => {
  if (number_string.length > 1) {
    number_string = number_string.slice(0, number_string.length - 1);
    result_disp.textContent = number_string;
  } else {
    number_string = "";
    result_disp.textContent = "0";
  }
});

equals_button.addEventListener("click", () => {
  const operand_operator = number_string.split(/([-+*x\/])/);

  // console.log(operand_operator);

  let operand_1 = Number(operand_operator[0]);
  let operand_2 = Number(operand_operator[2]);

  /*  console.log(operand_1);
    console.log(operand_2); */

  switch (operand_operator[1]) {
    case "+":
      result_disp.textContent = operand_1 + operand_2;
      number_string = operand_1 + operand_2;
      // console.log(operand_1+operand_2);
      break;
    case "-":
      result_disp.textContent = operand_1 - operand_2;
      number_string = operand_1 - operand_2;
      // console.log(operand_1-operand_2);
      break;
    case "x":
      result_disp.textContent = operand_1 * operand_2;
      number_string = operand_1 * operand_2;
      // console.log(operand_1*operand_2);
      break;
    case "/":
        result_disp.textContent = operand_1 / operand_2;
        number_string = operand_1 / operand_2;
        // console.log(operand_1/operand_2);
        break;
      

    default:
      console.log("no operand");
  }
});
