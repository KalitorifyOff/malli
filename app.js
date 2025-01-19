// Load products from the JSON file
const productsData = [
    {
      "name": "Hair Oil",
      "price": 220,
      "original_price": 250,
      "image": "https://bcuat.bajajconsumercare.com/assets/images/Bajaj-Almond-Drops-Hair_Oil.jpg",
      "description": "Nourishes your hair for a healthy shine."
    },
    {
      "name": "Shampoo",
      "price": 270,
      "original_price": 300,
      "image": "https://static.toiimg.com/thumb/msid-111138037,imgsize-1486433,width-400,resizemode-4/111138037.jpg",
      "description": "Cleanses and strengthens hair."
    }
  ];
  
  // Function to render products
  function renderProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = '';  // Clear existing products
  
    productsData.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price} <span class="original-price">₹${product.original_price}</span></p>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Function to handle navigation (to the contact page, for example)
  function handleNavigation() {
    const contactLink = document.querySelector('.contact-link');
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert("Navigating to Contact Page...");
      // Implement actual navigation if needed (e.g., use a router if you're using a JS framework like React)
    });
  }
  
  // Initialize functions
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    handleNavigation();
  });
  