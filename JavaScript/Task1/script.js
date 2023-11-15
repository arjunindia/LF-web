const dice = document.getElementById("dice");
document.getElementById("btn").addEventListener("click", () => {
  dice.src = `assets/${Math.floor(Math.random() * 6) + 1}.png`;
});
