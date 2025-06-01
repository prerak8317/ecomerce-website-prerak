console.log("Prerak is running...");
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    nav.style.right = "0";
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    nav.style.right = "-250px";
  });
}
