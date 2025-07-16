// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);

// จะได้ผลลัพธ์เป็น NaN เพราะ numberOfProductInStock มีค่าเป็น undefined ซึ่งไม่สามารถหารด้วย 0 ได้้