// Custom Alert function
function CustomAlert(message, callback) {
    const alertContainer = document.createElement('div')
    alertContainer.className = 'custom-alert';

    const alertMessage = document.createElement('p')
    alertMessage.textContent = message;
    
    const closeButton = document.createElement('button')
    closeButton.textContent = 'OK'
    closeButton.className = 'custom-alert-button'

    const cancelButton = document.createElement('span')
    cancelButton.className = 'custom-alert-cancel'
    cancelButton.innerHTML = '<i class="fa-solid fa-xmark" style="color: #000;"></i>'

    alertContainer.appendChild(cancelButton)
    alertContainer.appendChild(alertMessage)
    alertContainer.appendChild(closeButton)

    document.body.appendChild(alertContainer)

    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertContainer)
        if (callback) callback();
    });

    cancelButton.addEventListener('click', function() {
        document.body.removeChild(alertContainer);
    });
}

// Function to display users name on dashboard
document.addEventListener('DOMContentLoaded', () =>{
    const myName = document.querySelector('.myName')
    const getMyName = JSON.parse(localStorage.getItem('createProfile'))
    myName.textContent = `welcome ${getMyName.firstName}`
})


document.addEventListener('DOMContentLoaded', () => {
    const accountForm = document.getElementById('account-form');
    const closeAccountBtn = document.getElementById('close-account-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
// Function to update user details
    function loadUserData() {
        const users = JSON.parse(localStorage.getItem('users'));

        users.forEach((user=>{
            if (user) {
                document.getElementById('first-name').value = user.firstName ;
                document.getElementById('last-name').value = user.lastName;
                document.getElementById('email').value = user.email;
                document.getElementById('password').value = user.password;
            }

        }))

        
    }

    accountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(accountForm);
        const updatedAccountData = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            password: formData.get('password'),
            address: formData.get('address')
        };
        CustomAlert('Account updated successfully!', setTimeout(()=>{
            
            localStorage.setItem('users', JSON.stringify(updatedAccountData));
            localStorage.setItem('createProfile', JSON.stringify(updatedAccountData));
            window.location.reload()
        },2000));
    });

// Function to close user account
    closeAccountBtn.addEventListener('click', () => {
        (CustomAlert('Are you sure you want to close your account? This action cannot be undone.', function(){
            localStorage.clear()
            CustomAlert('Your account has been closed.', ()=>{
                setTimeout(()=>{
                    window.location.href = 'mSignup.html';
                },1000)
    
            });
           
        }))
            
        });

// Function to log user out
    logoutBtn.addEventListener('click', () => {
        (CustomAlert('Are you sure you want to logout?', ()=>{
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userEmail')
            localStorage.removeItem('createProfile')
            CustomAlert('You have been logged out.', function(){
                setTimeout(()=>{
                    window.location.href = 'mLogin.html';
                },1000)
            });

        }))
            
        });


// Function to render oders in user dashboard
function loadOrders() {
    const ongoingOrdersList = document.getElementById('ongoing-orders');
    const deliveredOrdersList = document.getElementById('delivered-orders');
    const orders = JSON.parse(localStorage.getItem('orders'));

    if (!orders || orders.length === 0) {
        ongoingOrdersList.innerHTML = '<p>No orders found.</p>';
        deliveredOrdersList.innerHTML = '<p>No orders found.</p>';
        return;
    }

    orders.forEach(order => {
        const renderOrder = document.createElement('div');
        const orderID = document.createElement('p');
        orderID.textContent = `Order ID: ${order.orderId}`;
        renderOrder.appendChild(orderID);

        const cartItemsHTML = order.cart.map(item => `
            <div>
                <p>Product: ${item.name} <img src='${item.image}' width='40px'></p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button id="view-orders-btn" style="border-radius:15px; color:#cbf802; background:black; height:4vh; display:flex; align-items:center;" >view more</button>
            </div>
        `).join('');

        renderOrder.innerHTML += cartItemsHTML;

        if (order.status === 'Delivered') {
            deliveredOrdersList.appendChild(renderOrder);
        } else {
            ongoingOrdersList.appendChild(renderOrder);
        }
    });
}


// Function to render messages in user dashboard
    function loadInbox() {
        const inboxList = document.getElementById('inbox');
        const messageCount = document.querySelector('.inbox-count')
        const messages = JSON.parse(localStorage.getItem('messages'))

        messageCount.textContent = messages.length

        messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = 'msg-container'
            messageElement.innerHTML = `<span id="msg-counter">Message #${message.id}</span> <br><br> <h5> From ${message.sender}: ${message.subject}</h5> <p>${message.body}</p>`;
            inboxList.appendChild(messageElement);
        });
    }

    loadUserData();
    loadOrders();
    loadInbox();
});

// Function to route to order details page
document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault()

    document.getElementById('view-orders-btn').addEventListener('click', ()=>{
        window.location.href='../pages/check-out/orderDetails.html'
    })
})


// Function to switch between sections
document.addEventListener('DOMContentLoaded', ()=>{
    
    document.getElementById('my-orders').style.color ='#cbf802'

    //handle inbox section
    const handleInboxSection = ()=>{
        document.getElementById('my-inbox').addEventListener('click', (event)=>{
            event.preventDefault()

            document.getElementById('inbox').style.display = 'block'
            document.getElementById('orders').style.display = 'none'
            document.getElementById('account').style.display = 'none'
            document.getElementById('close-account').style.display = 'none'
            document.getElementById('logout').style.display = 'none'
            document.getElementById('my-inbox').style.color = '#cbf802'
            document.getElementById('my-orders').style.color ='white'
            document.getElementById('my-close-account').style.color ='white'
            document.getElementById('my-manage-account').style.color ='white'
            document.getElementById('logout-a').style.color ='white'

        })
    }
    handleInboxSection()

     //handle order section
     const handleOrderSection = ()=>{
        document.getElementById('my-orders').addEventListener('click', (event)=>{
            event.preventDefault()

            document.getElementById('orders').style.display = 'block'
            document.getElementById('inbox').style.display = 'none'
            document.getElementById('account').style.display = 'none'
            document.getElementById('close-account').style.display = 'none'
            document.getElementById('logout').style.display = 'none'
            document.getElementById('my-orders').style.color = '#cbf802'
            document.getElementById('my-inbox').style.color ='white'
            document.getElementById('my-close-account').style.color ='white'
            document.getElementById('my-manage-account').style.color ='white'
            document.getElementById('logout-a').style.color ='white'
        })
    }
    handleOrderSection()

    //handle account section
    const handleAccountSection = ()=>{
        document.getElementById('my-manage-account').addEventListener('click', (event)=>{
            event.preventDefault()

            document.getElementById('account').style.display = 'block'
            document.getElementById('orders').style.display = 'none'
            document.getElementById('inbox').style.display = 'none'
            document.getElementById('close-account').style.display = 'none'
            document.getElementById('logout').style.display = 'none'
            document.getElementById('my-manage-account').style.color = '#cbf802'
            document.getElementById('my-inbox').style.color ='white'
            document.getElementById('my-close-account').style.color ='white'
            document.getElementById('my-orders').style.color ='white'
            document.getElementById('logout-a').style.color ='white'
        })
    }
    handleAccountSection()


    //close account section
    const closeAccountSection = ()=>{
        document.getElementById('my-close-account').addEventListener('click', (event)=>{
            event.preventDefault()

            document.getElementById('close-account').style.display = 'block'
            document.getElementById('account').style.display = 'none'
            document.getElementById('orders').style.display = 'none'
            document.getElementById('inbox').style.display = 'none'
            document.getElementById('logout').style.display = 'none'
            document.getElementById('my-close-account').style.color = '#cbf802'
            document.getElementById('my-inbox').style.color ='white'
            document.getElementById('my-manage-account').style.color ='white'
            document.getElementById('my-orders').style.color ='white'
            document.getElementById('logout-a').style.color ='white'
        })
    }
    closeAccountSection()


    //handle logout section
    const handleLogoutSection = ()=>{
        document.getElementById('logout-a').addEventListener('click', (event)=>{
            event.preventDefault()

            document.getElementById('logout').style.display = 'block'
            document.getElementById('close-account').style.display = 'none'
            document.getElementById('account').style.display = 'none'
            document.getElementById('orders').style.display = 'none'
            document.getElementById('inbox').style.display = 'none'
            document.getElementById('logout-a').style.color ='#cbf802'
            document.getElementById('my-close-account').style.color = 'white'
            document.getElementById('my-inbox').style.color ='white'
            document.getElementById('my-manage-account').style.color ='white'
            document.getElementById('my-orders').style.color ='white'
        })
    }
    handleLogoutSection()
})

