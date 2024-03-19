//My 1st project on typescript
//  I am developing a true BMI by 
//  correct method;
// BMI stand for body mass index:
//formula:
// enter your height in meter
var height_In_Meter = 1.75;
// Do not change this line
var square_Of_Height_In_Meter = Math.pow(height_In_Meter, 2);
// just inter here your weight in kg
var weight_In_Kg = 65;
var BMI = weight_In_Kg / square_Of_Height_In_Meter;
console.log("Imran Khan's BMI is ".concat(BMI));
