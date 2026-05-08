emailjs.init("40uBU07U8HDZdoa9T");

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
    "Hotel Anusaya",
    "template_mgeftcp",
    params
  )

  .then(function(){

    document.getElementById("successMessage")
    .innerHTML = `
      ✅ Order Sent Successfully <br><br>

      Hotel Contact Number:<br>
      📞 +91 9178807616
    `;

  })

  .catch(function(error){

    alert("Failed To Send Order");

    console.log(error);

  });

}
