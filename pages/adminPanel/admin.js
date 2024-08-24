document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    let products = JSON.parse(localStorage.getItem('products')) || [];

    function saveProductsToLocalStorage() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    function renderProductList() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Description: ${product.description}</p>
                <p>Quantity: ${product.quantity}</p>
                <p><img src="${product.image}" alt="${product.name}" width="100"></p>
                <button onclick="editProduct(${index})">Edit</button>
                <button class="delete" onclick="deleteProduct(${index})">Delete</button>
            `;
            productList.appendChild(productItem);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const description = document.getElementById('product-description').value;
        const quantity = document.getElementById('product-quantity').value;
        const image = document.getElementById('product-image').value;

        const product = { name, price, description, quantity, image };

        if (id) {
            products[id] = product;
        } else {
            products.push(product);
        }

        saveProductsToLocalStorage();
        renderProductList();
        form.reset();
    });

    window.editProduct = function(index) {
        const product = products[index];
        document.getElementById('product-id').value = index;
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-description').value = product.description;
        document.getElementById('product-quantity').value = product.quantity;
        document.getElementById('product-image').value = product.image;
    };

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        saveProductsToLocalStorage();
        renderProductList();
    };

    renderProductList();
});


document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Clear relevant local storage items
            localStorage.removeItem('isAdminLoggedIn');
            localStorage.removeItem('adminEmail');
            localStorage.removeItem('adminDetails');

            // Redirect to login page
            window.location.href = '../../vendor_area/vlogin.html'; // Adjust the path to your login page
        });
    }
});
