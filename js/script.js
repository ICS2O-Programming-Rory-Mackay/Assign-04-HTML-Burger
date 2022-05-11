// Copyright 2022 Rory Mackay All rights reserved
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the subtotal, tax, and total price for a burger
 */
function displayPrice () {
  // constants
  const HST = 0.13;
  const SINGLE_PRICE = 3.00
  const DOUBLE_PRICE = 6.00
  const TRIPLE_PRICE = 9.00
  const COMBO_PRICE = 3.00
  const TOPPING_PRICE = 0.50
	// initialize variables
	let subtotal = 0;
  let pattyPrice = 0;
  let comboPrice = 0;
  let toppingPrice = 0;
  // get user input for number of patty's
	let select = document.getElementById('patty');
	let patty = select.options[select.selectedIndex].value;
  // get user input for number of toppings
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let toppingAmount = checkboxes.length;
  let toppingPrice = toppingAmount * TOPPING_PRICE;
  // get user input for combo (yes or no)

  // if patty selection == single, sizePrice == SINGLE_PRICE
	if (patty == "single") {
	  pattyPrice == SINGLE_PRICE
	} 
  // else if patty selection == double, sizePrice == DOUBLE_PRICE
	else if (patty == "double") {
	  pattyPrice == DOUBLE_PRICE
	} 
  // otherwise pattyPrice == TRIPLE_PRICE
  else {
    pattyPrice == TRIPLE_PRICE
  }
	// if user age > 0 and equal or less than 120, display "Regular price for you!"	
	else if (userAge > 0 && userAge <= 120) {
	  message = "Regular price for you!"
	}

  // otherwise display "Regular price for you!"	
	else {
	  message = "Please enter info to proceed."
	}
// Displaying results
document.getElementById("message").innerHTML = message
}