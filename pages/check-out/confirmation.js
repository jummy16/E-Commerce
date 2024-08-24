document.addEventListener('DOMContentLoaded', function () {
    const currentOrderId = localStorage.getItem('currentOrderId');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const currentOrder = orders.find(order => order.orderId == currentOrderId);

    if (currentOrder) {
        let confirmationMessage = 'Order placed successfully! ';
        if (currentOrder.paymentMethod === 'Card') {
            confirmationMessage += 'Payment completed successfully!';
        } else if (currentOrder.paymentMethod === 'Pay on Delivery') {
            confirmationMessage += 'You will pay on delivery.';
        }

        document.getElementById('confirmation-message').textContent = confirmationMessage;
        let confirmationDetails = `
            <p>Name: ${currentOrder.customerName}</p>
            <p>Order-Id: ${currentOrderId}</p>
            <p>Email: ${currentOrder.customerEmail}</p>
            <p>Address: ${currentOrder.customerAddress}</p>
            <p>Country: ${currentOrder.customerCountry}</p>
            <p>State: ${currentOrder.customerState}</p>
            <p>City: ${currentOrder.customerCity}</p>
            <p>Phone No: ${currentOrder.customerPhone}</p>
            <p>Alt Phone No: ${currentOrder.customerAlternatePhone}</p>
        `;
        if (currentOrder.paymentMethod === 'Card') {
            confirmationDetails += `<p>Transaction Reference: ${currentOrder.transactionReference}</p>`;
        }
        document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    } else {
        document.getElementById('confirmation-message').textContent = 'No order found.';
    }
});

document.getElementById('print-button').addEventListener('click', function () {
    window.print();
});

document.addEventListener('DOMContentLoaded', () => {
    const ribbonContainer = document.getElementById('ribbon-container');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createRibbon() {
        const ribbon = document.createElement('div');
        ribbon.classList.add('ribbon');

        // Randomly assign a shape class
        const shapes = ['circle', 'square', 'rectangle', 'triangle'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        ribbon.classList.add(shape);

        // Set random colors for different shapes
        if (shape === 'triangle') {
            ribbon.style.borderBottomColor = getRandomColor();
        } else {
            ribbon.style.backgroundColor = getRandomColor();
        }

        // Set random size and positions
        let width, height;
        if (shape === 'circle' || shape === 'square') {
            width = height = Math.random() * 10 + 5 + 'px'; // Small size
        } else if (shape === 'rectangle') {
            width = Math.random() * 20 + 10 + 'px'; // Small width
            height = Math.random() * 10 + 5 + 'px'; // Small height
        } else if (shape === 'triangle') {
            width = height = 0;
        }

        ribbon.style.width = width;
        ribbon.style.height = height;
        ribbon.style.left = Math.random() * 100 + 'vw';
        ribbon.style.top = Math.random() * -10 + 'vh'; // Start slightly above the viewport
        ribbon.style.animationDuration = Math.random() * 1.5 + 1.5 + 's'; // Increased speed
        ribbon.style.opacity = Math.random();

        ribbonContainer.appendChild(ribbon);

        setTimeout(() => {
            ribbon.remove();
        }, 3000);
    }

    setInterval(() => {
        for (let i = 0; i < 10; i++) {
            createRibbon();
        }
    }, 300);
});
