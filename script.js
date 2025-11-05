// No semi colon 

function greet() {
  console.log("Welcome to my ugly UI analysis");
}

greet();

// Fun color-changing background + greeting
window.addEventListener("load", () => {
  const colors = ["#ff6f61", "#6b5b95", "#88b04b", "#f7cac9", "#92a8d1"];
  let i = 0;

  setInterval(() => {
    document.body.style.backgroundColor = colors[i % colors.length];
    i++;
  }, 3000);

  const msg = document.createElement("h2");
  msg.textContent = "🎉 Welcome to My Animated Page! 🎨";
  document.body.appendChild(msg);
});

