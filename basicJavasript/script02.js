// operaters in javascript

// var num1 = 7 ;
// var num2 = 6 ;

// console.log( num1 * num2 );


// program to find persentage of course price discount

var sellingPrice = 199;
var listingPrice =799;

var discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;

// Math.round will ignore the decimal values from te discountpercent

displayDiscountPercent = Math.round(discountPercent);

console.log(`Selling Price is ${sellingPrice}
listing price is ${listingPrice}
and the discount persentage is ${displayDiscountPercent}% off
`)