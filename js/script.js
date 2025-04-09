// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */


function calculate () {
  // turn user input into variables
    let height = parseFloat(document.getElementById('height-of-trapezoid').value);
    let base1 = parseFloat(document.getElementById('base1-of-trapezoid').value);
    let base2 = parseFloat(document.getElementById('base2-of-trapezoid').value);

  // process
  let area = [(base1 + base2) / 2] * height
  // display final information
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
