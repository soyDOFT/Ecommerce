// Checks when the DOM content is loaded, 
document.addEventListener("DOMContentLoaded", function () {
  //Get the products.json file
  fetch('products.json')
    // Get the response and into json
    .then(response => response.json())
    //Add the content
    .then(data => {
      // Get the container
      const container = document.getElementById('product-container');
      // Go through each product in the array
      data.forEach(product => {

        const productElement = document.createElement('div');      // Create a div element for each product
        productElement.classList.add('product-item');    // Add a class to the product item
        const productImage = document.createElement('img');     // Create an img element for the product image
        productImage.src = product.image;  // Set the src attribute of the image
        productImage.style.width = '20vw';
        productElement.appendChild(productImage);  // Appends the items
        productElement.style.textAlign = 'center';


        const productName = document.createElement('h3'); // Create an h3 element for the product title
        productName.textContent = product.name; // Set the text content of the title
        productName.style.textAlign = 'center';
        productElement.appendChild(productName); // Append the title to the product item
        const productPrice = document.createElement('p'); // Create a p element for the product price
        productPrice.textContent = '$' + product.price; // Set the text content of the price
        productElement.appendChild(productPrice); // Append the price to the product item
        const productDescription = document.createElement('p');   // Create a p element for the product description
        productDescription.textContent = product.description;   // Set the text content of the description
        productElement.appendChild(productDescription);      // Append the description to the product item
        container.appendChild(productElement);    // Append the product item to the grid container
      });
    })
    .catch(error => console.log('Error fetching products:', error));    // Handle errors if any occur during the fetch operation
});