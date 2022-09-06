window.onload = function () {
    const url = new URLSearchParams(window.location.search)
    const Param = url.get('productId')

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + Param,
        method: 'GET',
    })
    promise.then(function (result) {
        console.log(result.data)
        renderDeatailProduct(result.data);
    })
    promise.catch(function (err) {
        console.log(err)
    })
    getDataProduct();
}
function renderDeatailProduct(product) {
    var pro = product.content;
    var size = '';
    for(var i=0; i<pro.size.length;i++)
    {
        size+=`
            <button>${pro.size[i]}</button>
        `;
    }
    var innerHtml = `
    <div class="col left-col">
                    
                        <img src="${pro.image}" alt="" />
                    
                </div>
                <div class="col right-col">
                    <div class="product-info">
                        <h3>${pro.name}</h3>
                        <p>
                        ${pro.description}
                        </p>
                    </div>
                    <div class="product-selection">
                        <div class="heading-content">
                            <span>Available size</span>
                        </div>
                        <div class="selection row">
                        ${size}
                        </div>
                    </div>
                    <div class="categories-selection">
                        <p>${pro.price}</p>
                        <button class="btn catego-btn plus">+</button>
                        <span class="num">1</span>
                        <button class="btn catego-btn minus">-</button>
                    </div>
                    <button class="cart-btn add">Add to cart</button>
                </div>
        `
    document.querySelector('#renderProduct').innerHTML = innerHtml
}

function getDataProduct() {
    var promise = axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    })

    //scuess
    promise.then(function (result) {
        console.log('result', result.data);
        renderProduct(result.data);
    });

    //fail
    promise.catch(function (err) {
        console.log(err);
    });
}


function renderProduct(arrProduct) {
    var innerHtml = '';
    //console.log(arrProduct);
    for(var i = 0; i < arrProduct.content.length; i++){
        var product = arrProduct.content[i];
        innerHtml += `
        <div class="col">
            <div class="prod-box">
                <div class="pro-infor">
                    <img src="${product.image}" alt="" />
                    <a onclick="location.href='/detail_pro.html?productId=${product.id}'" href="/detail_pro.html?productId=${product.id}">
                        <p>${product.name}</p>
                    </a>
                    <span>${product.shortDescription}</span>
                </div>
                <div class="pro-btn">
                    <button onclick="location.href='/detail_pro.html?productId=${product.id}'">Buy now</button>
                    <span>${product.price}</span>
                </div>
            </div>
        </div>
        `;
    }
    document.querySelector("#getProd").innerHTML=innerHtml;
}
