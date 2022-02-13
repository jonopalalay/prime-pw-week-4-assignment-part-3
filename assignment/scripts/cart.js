console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item){
  basket.push(item);
  return true;
    if (isFull(basket)){
      basket.push(item);
      return true;{

      return false;
      }
    }
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
console.log(basket.length);
console.log(listItems() );


function empty(){
  basket.length = 0;
  return basket;
}

console.log('empty basket', empty(basket))

function isFull(){
  if(basket.length < maxItems){
    return false;
  }
  return true;
}

console.log(basket.length); //basket is empty
console.log('Is the basket full', isFull() );
console.log('Adding milk (expect true)', addItem('milk'));
console.log('Adding cereal (expect true)', addItem('cereal'));
console.log('Adding peanut butter (expect true)', addItem('peanut butter'));
console.log('Adding bread (expect true)', addItem('bread'));

function removeItem(item) {
  let itemIndex = basket.indexOf(item);

  if (itemIndex === -1){
    return null;
  };

  return basket.splice(itemIndex, 1);
}

console.log(basket);
console.log(removeItem('cereal')); // return 'cereal'
console.log(basket);
console.log(removeItem('foo')); // return null
console.log(removeItem('milk')); // return 'milk'
console.log(removeItem('Jono')); // return null
