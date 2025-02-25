document.getElementById('ad-product-btn')
.addEventListener('click', function(event)
{
    event.preventDefault();
    // console.log('product')
    const productName = document.getElementById('product_name').value;
    // console.log(productName)
    const productImage = document.getElementById('product-img').value;
    // console.log(productImage);
    const productPrice = document.getElementById('product-price').value;
    // console.log(productPrice);
    console.log(productName, productImage, productPrice);


    const mainContainer = document.getElementById('productList');
        // console.log(mainContainer);
    const div = document.createElement('div');
    // console.log(div)
    div.innerHTML =`
       <h1>${productName}</h1>
       <img src="${productImage}" alt=""/>
       <p>${productPrice}</p> 
       
    `
    mainContainer.appendChild(div);
    console.log(div)


})