// ITERATION 0

/*window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});*/

// ITERATION 1

function updateSubtotal(product) {
  //Step 1
  const priceElement = product.querySelector('.price span');
  const quantityInputElement = product.querySelector('.quantity input');

  //Step 2
  price = priceElement.innerText;
  quantity = quantityInputElement.value;

  //Step 3
  const subtotalCal = price * quantity;

  //Step 4
  const subtotal = product.querySelector('.subtotal span');

  //Step 5
  subtotal.innerText = subtotalCal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  console.dir(singleProduct);
  console.log(singleProduct);*/
  // end of test

  // ITERATION 2
  const productElements = document.getElementsByClassName('product');
  for (const productElement of productElements) {
    updateSubtotal(productElement);
  }

  // ITERATION 3
  //... your code goes here
  const calculatePricesBtn = document.getElementById('calculate');
  const totalAmountElement = document.querySelector('#total-value span');
  const subtotalElements = document.querySelectorAll('.subtotal span');
  //console.log(subtotalElements);
  //console.dir(subtotalElements);

  let total = 0;

  calculatePricesBtn.addEventListener('click', () => {
    for (const subtotalElement of subtotalElements) {
      let subtotal = Number(subtotalElement.innerText);
      total += subtotal;
    }
  });

  totalAmount = totalAmountElement.innerText;
  //console.log(totalAmountElement);
  //console.dir(totalAmountElement);

  totalAmount = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
