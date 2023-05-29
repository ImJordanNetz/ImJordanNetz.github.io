var wrapper = document.getElementById("ctaWrapper");

document.addEventListener("mousemove", function(event) {
  if (wrapper !== null){
    var rect = wrapper.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    var x = event.clientX - centerX;
    var y = event.clientY - centerY;
    var angle = Math.atan2(y, x);
    wrapper.style.background = "linear-gradient(" + ((angle * 180 / Math.PI) + 45) + "deg, red, yellow)";
  }
});


function createReservation() {
  // Get form values
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var numGuests = document.getElementById("people").value;
  var datetime = document.getElementById("datetime").value;
  
  // Create a reservation item
  var reservationItem = document.createElement("div");
  reservationItem.className = "reservation-item";
  
  if (firstName === "" || lastName == "" || numGuests < 1){
    alert("Invalid Information");
    return;
  }
  reservationItem.innerHTML = "<p><strong>Name:</strong> " + firstName + " " + lastName + "</p>"
      + "<p><strong>Number of Guests:</strong> " + numGuests + "</p>"
      + "<p><strong>Time:</strong> " + datetime + "</p>";
  
  // Add the reservation item to the list
  var reservationList = document.getElementById("reservation-list");
  reservationList.appendChild(reservationItem);
}
