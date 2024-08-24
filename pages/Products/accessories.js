const nairaSymbol = '\u20A6'

// accessories array
var adapters = [
    {
        "id": 25,
        "image": "../../assets/images/accessories/adapter/apple-30w-usb-c-power-adapter.webp",
        "name": "Apple-30w USB Adapter (white)",
        "price": "36,000",
        "beforeprice": "40,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 26,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-2-power-adapter-60w.webp",
        "name": "Apple magsafe adapter 60w (white)",
        "price": "76,000",
        "beforeprice": "80,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 27,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-power-adapter-85w.webp",
        "name": "Apple magsafe adapter 85w (white)",
        "price": "81,000",
        "beforeprice": "90,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 28,
        "image": "../../assets/images/accessories/adapter/apple-magsafe-2-power-adapter-60w.webp",
        "name": "Apple magsafe adapter 60w (white)",
        "price": "72,000",
        "beforeprice": "80,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const adapterContainer = document.getElementById('adapter');

    adapters.forEach(adapter => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${adapter.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${adapter.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = adapter.image;
        imgElement.alt = adapter.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = adapter.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${adapter.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${adapter.beforeprice}</s>`

        adapterContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var Airpods = [
    {
        "id": 29,
        "image": "../../assets/images/accessories/airpod/airpods-3rd-gen.webp",
        "name": "Airpod 3rd Generation (white)",
        "price": "315,000",
        "beforeprice": "350,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 30,
        "image": "../../assets/images/accessories/airpod/airpods-max-grey.webp",
        "name": "Airpod max (grey)",
        "price": "175,000",
        "beforeprice": "195,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 31,
        "image": "../../assets/images/accessories/airpod/airpods-with-charging-case-gen-2.webp",
        "name": "Airpod-with-charging-case (white)",
        "price": "175,000",
        "beforeprice": "195,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 32,
        "image": "../../assets/images/accessories/adapter/apple-30w-usb-c-power-adapter.webp",
        "name": "Apple-30w USB Adapter (white)",
        "price": "36,000",
        "beforeprice": "40,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const airpodContainer = document.getElementById('airpod');

    Airpods.forEach(airpod => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${airpod.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${airpod.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = airpod.image;
        imgElement.alt = airpod.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = airpod.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${airpod.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${airpod.beforeprice}</s>`

        airpodContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var cables = [
    {
        "id": 33,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-c-cable-2-m.webp",
        "name": "Apple lightning to USB (white)",
        "price": "25,200",
        "beforeprice": "28,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 34,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-cable-1m-zml.webp",
        "name": "USB Charge-cable 1m (white)",
        "price": "47,250",
        "beforeprice": "52,500",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 35,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-cable-2-m.webp",
        "name": "USB Charge-cable 2m (white)",
        "price": "58,500",
        "beforeprice": "65,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 36,
        "image": "../../assets/images/accessories/cable/lightning-to-usb-c-cable-2-m.webp",
        "name": "USB Charge-cable 2m (white)",
        "price": "58,500",
        "beforeprice": "65,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cableContainer = document.getElementById('cable');

    cables.forEach(cable => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${cable.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${cable.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = cable.image;
        imgElement.alt = cable.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = cable.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${cable.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${cable.beforeprice}</s>`

        cableContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});



var protections = [
    {
        "id": 37,
        "image": "../../assets/images/accessories/protection/apple-iphone-15-pro-max-finewoven-case-with-magsafe-taupe.webp",
        "name": "Magsafe protection case (Brown)",
        "price": "34,200",
        "beforeprice": "38,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 38,
        "image": "../../assets/images/accessories/protection/iphone-13-13-pro-tempered-glass-full-coverage-screen.webp",
        "name": "iphone 13 screen protection (glass full)",
        "price": "54,000",
        "beforeprice": "60,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 39,
        "image": "../../assets/images/accessories/protection/iphone-14-clear-case-with-magsafe.webp",
        "name": "iphone 14 case (white)",
        "price": "72,000",
        "beforeprice": "80,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 40,
        "image": "../../assets/images/accessories/protection/iphone-15-pro-max-clear-case-with-magsafe.webp",
        "name": "iphone 15 max case(gray)",
        "price": "81,000",
        "beforeprice": "90,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const protectionContainer = document.getElementById('protection');

    protections.forEach(protection => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${protection.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${protection.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = protection.image;
        imgElement.alt = protection.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = protection.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${protection.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${protection.beforeprice}</s>`

        protectionContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});
