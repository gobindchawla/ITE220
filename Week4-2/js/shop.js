// var products = [
// 				"Brooklyn T-Shirt White",
// 				"Brooklyn T-Shirt Black",
// 				"Apple Watch",
// 				"Android Phone"
// 				];

// var prices = [10, 10, 199, 159];




// var totalPrice = prices[0] + prices[1] + prices[2] + prices[3];

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent = totalPrice;

// var customerName = "Gobind";



// var customerElement = document.getElementById("customer-name");
// customerElement.textContent = customerName;



// var productsText = "";
// var productsElement = document.getElementById("product-list");

// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[0]+"</span>" + products[0] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + products[1] + "</li>";

// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>" + products[2] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + products[3] + "</li>";

// productsElement.innerHTML = productsText; 

// var now
// now = new Date().getHours()
// var text="";
//  if (now < 12) {
//     text = "Good Morning";
// } else if (now < 17){
//     text = "Good Afternoon";
// }
// else {
// 	text = "Good Evening"; 
// }
// document.getElementById("demo").innerHTML = text;




var shop = {
	customerName: "Gobind",
	totalPrice: 0,
	products: ["Brooklyn T-Shirt White",
				"Brooklyn T-Shirt Black",
				"Apple Watch",
				"Android Phone"
				],
	prices : [10, 10, 199, 159],

	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;
	},

	displayProductList : function() {
		var productsText = "";
		 productsElement = document.getElementById("product-list");

		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[0]+"</span>" +  this.products[0] + "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" +  this.prices[1]+"</span>" +  this.products[1] + "</li>";

		productsText += "<li class='list-group-item'><span class='badge'>$" +  this.prices[2]+"</span>" +  this.products[2] + "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" +  this.prices[3]+"</span>" +  this.products[3] + "</li>";

		productsElement.innerHTML = productsText; 

	},

	calculateTotalPrice : function() {
		return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
	},



	displayTotalPrice : function() {

		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
	}




};

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();

