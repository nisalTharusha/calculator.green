function updateDisplay() {
	var product1 = document.getElementById("product1").value;
	var product2 = document.getElementById("product2").value;
	var product3 = document.getElementById("product3").value;
	document.getElementById("display").innerHTML = "You selected: " + product1 + ", " + product2 + ", " + product3;
  }