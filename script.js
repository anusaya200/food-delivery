emailjs.init("YOUR_PUBLIC_KEY");

function openOrder(food, hotelId){

  document.getElementById("popup").style.display = "flex";

  document.getElementById("food").value = food;

  const hotel =
  document.getElementById(hotelId).value;

  document.getElementById("hotel").value = hotel;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

function sendOrder(){

  const params = {

    customer_name:
    document.getElementById("name").value,

    phone:
    document.getElementById("phone").value,

    address:
    document.getElementById("address").value,

    quantity:
    document.getElementById("quantity").value,

    food:
    document.getElementById("food").value,

    hotel:
    document.getElementById("hotel").value
  };

  emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    params
  )

  .then(function(){

    document.getElementById("successMessage")
    .innerHTML = `
      ✅ Order Sent Successfully <br><br>

      Hotel Contact Number:<br>
      📞 +91 9876543210
    `;

  });

}
