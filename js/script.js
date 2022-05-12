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
  const NO_TOPPING_PRICE = 0.00
	// initialize variables
	let subtotal = 0;
  let pattyPrice = 0;
  let comboPrice = 0;
  // get user input for number of patty's
	let select = document.getElementById('patty');
	let patty = select.options[select.selectedIndex].value;
  // get user input for number of toppings
  let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
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
  // If the user selects certain toppings
  if (topping == "lettuce" || topping == "tomato" || topping == "cheese"
      || topping == "bacon" || topping == "pickles" || topping == "onions") {
    toppingPrice = TOPPING_PRICE
    // If the user doesn't choose a topping
  } else {
    toppingPrice = NO_TOPPING_PRICE
  }
  // If the user selects a combo

 // Calculations for Subtotal, Tax and the true total
  subtotal = pattyPrice + toppingPrice + comboPice
  let tax = subtotal * HST;
  let total = subtotal + tax;

  // Displaying the totals to the screen
  document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
  document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2)
}