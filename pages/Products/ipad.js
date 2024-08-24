const nairaSymbol = '\u20A6'
var ipads = [
    {
        "id": 21,
        "image": "../../assets/images/ipad/apple-ipad-9th-gen-10.2-wi-fi-cellular-256gb-space-grey.jpg",
        "name": "Apple IPad 256gb (grey)",
        "price": "1,485,000",
        "beforeprice": "1,650,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 22,
        "image": "../../assets/images/ipad/Apple-IPad-Pro-12.9-M2-2022 Model-Wi-Fi-Only-128GB-Silver.jpg",
        "name": "Apple IPad 128gb (silver)",
        "price": "1,895,100",
        "beforeprice": "2,100,100",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 23,
        "image": "../../assets/images/ipad/apple-ipad-pro-12.9-m22022-modelwi-ficellular-512gb-space-gray.jpg",
        "name": "Apple Ipad 512gb (gray)",
        "price": "1,602,000",
        "beforeprice": "1,780,000",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    },
    {
        "id": 24,
        "image":"../../assets/images/ipad/apple-ipad-9th-gen-10.2-wi-fi-cellular-256gb-space-grey.jpg",
        "name": "Apple ipad 256gb (gray)",
        "price": "4,386,780",
        "beforeprice": "4,874,200",
        "discountprice": "-10%",
        "quantity": 1,
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui sequi veritatis ex, omnis repellendus, iste quod magnam aliquam nobis esse nemo saepe id? Alias doloribus placeat harum dolorem quaerat." 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const ipadContainer = document.getElementById('ipadSeries');

    ipads.forEach(ipad => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('iphone-img')
        imgDiv.id = `pimg${ipad.id}`

        const anchor = document.createElement('a');
        anchor.href = `/pages/collections/collections.html?id=${ipad.id}`;

        const imgElement = document.createElement('img');
        imgElement.src = ipad.image;
        imgElement.alt =ipad.name;

        const PDescription = document.createElement('h5')
        PDescription.innerText = ipad.name

        const CPrice = document.createElement('h6')
        CPrice.innerHTML = `Price:${nairaSymbol}${ipad.price}`

        const BPrice = document.createElement('h6')
        BPrice.innerHTML = `Before:<s>${nairaSymbol}${ipad.beforeprice}</s>`

        ipadContainer.appendChild(imgDiv);
        anchor.appendChild(imgElement);
        imgDiv.appendChild(anchor);
        imgDiv.appendChild(PDescription)
        imgDiv.appendChild(CPrice)
        imgDiv.appendChild(BPrice)
    });
});

