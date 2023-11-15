document.getElementById("btn").addEventListener("click", () => {
  let firstValue = Number(document.getElementById("first_value").value);
  let secondValue = Number(document.getElementById("second_value").value);
  if (
    firstValue &&
    secondValue &&
    typeof firstValue === "number" &&
    typeof secondValue === "number"
  ) {
    document.getElementById("result").innerHTML = firstValue + secondValue;
  } else {
    alert("Please enter a valid number");
  }
});
