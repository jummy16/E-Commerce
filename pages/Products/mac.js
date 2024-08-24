const nairaSymbol = '\u20A6'

// mac product array
var macArray = [
    {
        "id": 17,
        "image": "../../assets/images/mac/apple-13.6-macbook-air-m2-midnight-8gb-512gb.jpg",
        "name": "Macbook Air 512gb",
        "price": "450,000",
        "beforeprice": "500,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 18,
        "image": "../../assets/images/mac/2024 OSX SONOMA- 2018 MACBOOK AIR 13 - 1.6GHz i5 - 16GB RAM - 256GB SSD - GRAY.webp",
        "name": "Macbook AIR 13 256gb (grey)",
        "price": "1,890,090",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },,
    {
        "id": 19,
        "image": "../../assets/images/mac/apple-macbook-air-13-inch-2022-m2-8gb-256gb-ssd-8-core-gpu-space-gray.jpg",
        "name": " Apple Macbook Air 13 256gb (gray)",
        "price": "1,602,000",
        "beforeprice": "1,780,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 20,
        "image": "../../assets/images/mac/apple-macbook-pro-16.2-32gb-1tb-10-cores-m1-max-silver.jpg",
        "name": "Apple MacBook Pro 32gbRAM 1tbROM (10-cores, silver)",
        "price": "1,602,000",
        "beforeprice": "1,780,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const macContainer = document.getElementById('macbookSeries');

    macArray.forEach(mac => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${mac.id}`

        const anchor = document.createElement('a');
        anchor.href = `../../pages/collections/collections.html?id=${mac.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = mac.image;
        imgElement.alt = mac.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = mac.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${mac.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${mac.beforeprice}</s>`

        macContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});
