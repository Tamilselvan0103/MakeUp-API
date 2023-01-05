document.addEventListener("DOMContentLoaded",()=>{
    //Declare API links for 10 Brands 
let productBlush = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush";
let productBronzers = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer";
let productEyebrow = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow";
let productEyeliner = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner";
let productEyeshadow = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow";
let productFoundation = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation";
let productLip_liner = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner";
let productLipstick = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick";
let productMascara = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara";
let productNail_polish = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish";

// Navbar impelmentation ---------------------------------------------------------------------------------------------

let nav = document.getElementById("navbar")
nav.innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark" id ="navbar">
<a class="navbar-brand" href="#">Makeup API</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto">
    <li class="nav-item">
      <a class="nav-link" href="#wholecontent" >Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        Brands
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#no1">Lip liner</a>
        <a class="dropdown-item" href="#no2">Blush</a>
        <a class="dropdown-item" href="#no3">Bronzer</a>
        <a class="dropdown-item" href="#no4">Eyebrow sui</a>
        <a class="dropdown-item" href="#no5">Eyeliner</a>
        <a class="dropdown-item" href="#no6">Eyeshadow</a>
        <a class="dropdown-item" href="#no7">Foundation</a>
        <a class="dropdown-item" href="#no8">Lipstick</a>
        <a class="dropdown-item" href="#no9">Mascara</a>
        <a class="dropdown-item" href="#no10">Nail polish</a>
      </div>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>

`
// function for productBlush------------------------------------------------------------------------------------------------------------


async function fetchApi(){
try{
let productApi = await fetch(productBlush);
let response = await productApi.json();
// console.log(response);
response.forEach((data)=>{
    // console.log(data);
user = data

    dispalyProduct(data)

})
}catch(error)
{
    console.log(error);
}
}
fetchApi()




async function dispalyProduct(data){
    let productEl = document.querySelector("#Blush")
    productEl.innerHTML +=
    `       
<div class="card" id="car">
<img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
<div class="card-body">
<p class="brand"><span>Brand : </span>${data.brand}</p>
<p><span>Product Name : </span>${data.name}</p>
<p><span>Price : </span>${data.price_sign}${data.price}</p>
<p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
<p><span>Description : </span>${data.description}</p>
</div>
</div> 
    `
}



// function for productBronzers----------------------------------------------------------------------------------------------------------



async function bronzersApi(){
    try{
    let productApi = await fetch(productBronzers);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyBronzers(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    bronzersApi()
    
    
    
    
    async function dispalyBronzers(data){
        let productEl = document.querySelector("#Bronzer")
        productEl.innerHTML +=
        `
        <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }
    

// function for productEyebrow---------------------------------------------------------------------------------------------------------


async function EyebrowApi(){
    try{
    let productApi = await fetch(productEyebrow);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyEyebrow(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    EyebrowApi()
    
    
    
    
    async function dispalyEyebrow(data){
        let productEl = document.querySelector("#Eyebrow")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }

// function for productEyeliner-----------------------------------------------------------------------------------------------------


async function EyelinerApi(){
    try{
    let productApi = await fetch(productEyeliner);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyEyelinerApi(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    EyelinerApi()
    
    
    
    
    async function dispalyEyelinerApi(data){
        let productEl = document.querySelector("#Eyeliner")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }


// function for Eyeshadow--------------------------------------------------------------------------------------------------------


async function EyeshadowApi(){
    try{
    let productApi = await fetch(productEyeshadow);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyEyeshadowApi(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    EyeshadowApi()
    
    
    
    
    async function dispalyEyeshadowApi(data){
        let productEl = document.querySelector("#Eyeshadow")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }



// function for productFoundation-----------------------------------------------------------------------------------------------


async function FoundationApi(){
    try{
    let productApi = await fetch(productFoundation);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyFoundationApi(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    FoundationApi()
    
    
    
    
    async function dispalyFoundationApi(data){
        let productEl = document.querySelector("#Foundation")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand :</span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }




// founction for productLip_liner----------------------------------------------------------------------------------------------------------------------

async function Lip_linerApi(){
    try{
    let productApi = await fetch(productLip_liner);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyproductLipApi(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    Lip_linerApi()
    
    
    
    
    async function dispalyproductLipApi(data){
        let productEl = document.querySelector("#Lip-liner")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }

// function for productLipstick--------------------------------------------------------------------------------------------------------

async function lipstickApi(){
    try{
    let productApi = await fetch(productLipstick);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyproductLipstick(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    lipstickApi()
    
    
    
    
    async function dispalyproductLipstick(data){
        let productEl = document.querySelector("#Lipstick")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }


// function for productMascara--------------------------------------------------------------------------------------------------------------


async function MascaraAPi(){
    try{
    let productApi = await fetch(productMascara);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyproductMascara(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    MascaraAPi()
    
    
    
    
    async function dispalyproductMascara(data){
        let productEl = document.querySelector("#Mascara")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }




// function for productNail_polish------------------------------------------------------------------------------------------------------


async function Nail_polishapi(){
    try{
    let productApi = await fetch(productNail_polish);
    let response = await productApi.json();
    // console.log(response);
    response.forEach((data)=>{
        // console.log(data);
    
    
        dispalyproductNail_polishapi(data)
    
    })
    }catch(error)
    {
        console.log(error);
    }
    }
    Nail_polishapi()
    
    
    
    
    async function dispalyproductNail_polishapi(data){
        let productEl = document.querySelector("#Nail-polish")
        productEl.innerHTML +=
        `
          <div class="card" id="car">
        <img src="${data.image_link}" class="card-img-top rounded" alt="${data.name}">
        <div class="card-body">
        <p class="brand"><span>Brand : </span>${data.brand}</p>
        <p><span>Product Name : </span>${data.name}</p>
        <p><span>Price : </span>${data.price_sign}${data.price}</p>
        <p><span>Product Link : </span><a href="${data.product_link}">Link</a></p>    
        <p><span>Description : </span>${data.description}</p>
        </div>
        </div>
        `
    }



})
















