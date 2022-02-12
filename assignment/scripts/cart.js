console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(item){
  basket.push(item);
  return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


function listItems(){
  for (let i=0; i<basket.length; i++){
      console.log (`Items in basket:', ${basket[i]} `);

    }
}

console.log('Adding orange (expect true)', addItem('orange'));
console.log(basket.length)
console.log(listItems() )


function empty(){
  for (let j=0; j<basket.length; i--){
    
}
console.log(basket.length)
