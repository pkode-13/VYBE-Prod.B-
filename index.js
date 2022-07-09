let item = document.querySelectorAll(".vb-grid-item"),
  form_submit = document.forms["form-1"],
  car_left = document.getElementById("1"),
  car_middle = document.getElementById("2"),
  car_right = document.getElementById("3"),
  not_counted_before = !0,
  index = 2;
function remove_classes() {
  car_left.classList.remove("left"),
    car_middle.classList.remove("left"),
    car_right.classList.remove("left"),
    car_left.classList.remove("middle"),
    car_middle.classList.remove("middle"),
    car_right.classList.remove("middle"),
    car_left.classList.remove("right"),
    car_middle.classList.remove("right"),
    car_right.classList.remove("right");
}
function add_classes(e) {
  switch (e) {
    case 1:
      car_left.classList.add("middle"),
        car_middle.classList.add("right"),
        car_right.classList.add("left");
      break;
    case 2:
      car_middle.classList.add("middle"),
        car_right.classList.add("right"),
        car_left.classList.add("left");
      break;
    case 3:
      car_right.classList.add("middle"),
        car_left.classList.add("right"),
        car_middle.classList.add("left");
  }
}
window.addEventListener("scroll", () => {
  not_counted_before &&
    window.scrollY >
      document.querySelector(".hand-band").getBoundingClientRect().top &&
    ((not_counted_before = !1),
    item.forEach((e) => {
      let t = parseInt(e.getAttribute("count-upto")),
        d = Math.floor(2e3 / t),
        s = 0,
        i = setInterval(() => {
          s++, (e.innerHTML = `${s}%`), s == t && clearInterval(i);
        }, d);
    }));
}),
  form_submit.addEventListener("submit", (e) => {
    e.preventDefault(),
      (form_submit.style.display = "none"),
      (document.querySelector(".form-2").style.display = "block");
  }),
  setInterval(() => {
    remove_classes(),
      1 == index || 2 == index ? index++ : (index = 1),
      add_classes(index);
  }, 1e4),
  document.getElementById("move-left").addEventListener("click", () => {
    remove_classes(),
      2 == index || 3 == index ? index-- : (index = 1),
      add_classes(index);
  }),
  document.getElementById("move-right").addEventListener("click", () => {
    remove_classes(),
      1 == index || 2 == index ? index++ : (index = 1),
      add_classes(index);
  });
