var wrapper = document.getElementById("ctaWrapper");

document.addEventListener("mousemove", function(event) {
  var rect = wrapper.getBoundingClientRect();
  var centerX = rect.left + rect.width / 2;
  var centerY = rect.top + rect.height / 2;
  var x = event.clientX - centerX;
  var y = event.clientY - centerY;
  var angle = Math.atan2(y, x);
  wrapper.style.background = "linear-gradient(" + ((angle * 180 / Math.PI) + 45) + "deg, red, yellow)";
});
