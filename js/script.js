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
  const SINGLE_PRICE = 3.00;
  const DOUBLE_PRICE = 6.00;
  const TRIPLE_PRICE = 9.00;
  const COMBO_PRICE = 3.00;
  const NO_COMBO_PRICE = 0.00;
  const TOPPING_PRICE = 0.50;
  const NO_TOPPING_PRICE = 0.00;
  
	// initialize variables
	let subtotal = 0;
  let pattyPrice = 0;
  let comboPrice = 0;
  let topping = 0;
  
  // get user input for number of patty's
	let selectPatty = document.getElementById('patty');
	let patty = selectPatty.options[selectPatty.selectedIndex].value;
 
  // if patty selection == single, sizePrice == SINGLE_PRICE
	if (patty == "single") {
	  pattyPrice = SINGLE_PRICE
	} 
  // else if patty selection == double, sizePrice == DOUBLE_PRICE
	else if (patty == "double") {
	  pattyPrice = DOUBLE_PRICE
	} 
  // otherwise pattyPrice == TRIPLE_PRICE
  else if (patty == "triple") {
    pattyPrice = TRIPLE_PRICE
  }

  // get user input for number of toppings
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let toppingAmount = checkboxes.length;
  let toppingPrice = toppingAmount * TOPPING_PRICE;
  
  // If the user selects certain toppings
  if (topping == "lettuce" || topping == "tomato" || topping == "cheese"
      || topping == "bacon" || topping == "pickles" || topping == "onions") {
    toppingPrice == TOPPING_PRICE
  }
  // If the user doesn't choose a topping
  else {
    toppingPrice == NO_TOPPING_PRICE
  }
  // If the user selects a combo
  if (document.getElementById('option-1').checked) {
    comboPrice = COMBO_PRICE
  }
  // If the user doesn't choose a combo
  else {
    comboPrice = NO_COMBO_PRICE
  }

 // Calculations for Subtotal, Tax and the true total
  subtotal = toppingPrice + pattyPrice + comboPrice
  let tax = subtotal * HST;
  let total = subtotal + tax;

  // Displaying the totals to the screen
  document.getElementById("display-message").innerHTML = "Your subtotal: $" + subtotal.toFixed(2) + ", your tax: $" + tax.toFixed(2) + ", your total: $" + total.toFixed(2)
}