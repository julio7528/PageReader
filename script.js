function displayMessage() {
    var message = document.getElementById("message").value;
    message = message.replace(/\n/g, "<br>");
    document.getElementById("output").innerHTML = "The text you inserted is:<br>" + message;
  }
  
  document.getElementById("send-button").addEventListener("click", displayMessage);
  