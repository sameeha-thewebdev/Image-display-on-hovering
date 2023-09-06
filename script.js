var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  console.log(val);
  val.addEventListener("mouseenter", () => {
    val.childNodes[1].style.opacity = 0.7;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[1].style.opacity = 0;
  });
  val.addEventListener("mousemove", (axis) => {
    val.childNodes[1].style.left = axis.x + "px";
  });
});
