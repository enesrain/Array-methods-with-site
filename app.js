//eleman seçme
let main=document.querySelector("main")
let artan = document.querySelector(".btn-artan")
let azalan = document.querySelector(".btn-azalan")
let elektronik = document.querySelector(".elektronik")
let bakim = document.querySelector(".bakim")
let dekor = document.querySelector(".dekor")
let gida = document.querySelector(".food")
let max = document.querySelector(".max")
let min = document.querySelector(".min")
let input = document.querySelector(".input")
let search = document.querySelector(".search")
let all = document.querySelector(".all")



//dizi
let urunler= []

//Tüm ürünler
all.addEventListener("click",function(){
  main.innerHTML=" "
  show(urunler)
  
})

//Ürün ismi arama
search.addEventListener("click",function(){
   
   urunler.filter(item=>{
    if(item.title==input.value)
    show1(item)
   })
})




//Elektronik kategorisi
elektronik.addEventListener("click",function(){

    let aygit = urunler.filter(item=>item.category=="smartphones"||item.category=="laptops")
   show(aygit)
 
})

//Food
gida.addEventListener("click",function(){
     
  let food = urunler.filter(item=>item.category=="groceries")

  show(food)
   
})

//Bakım
bakim.addEventListener("click",function(){
     
    let bakimDizi = urunler.filter(item=>item.category=="fragrances"||item.category=="skincare")
    show(bakimDizi)
})

//Dekor
dekor.addEventListener("click",function(){

       main.innerHTML=" "
     let dekor = urunler.filter(item=>item.category=="home-decoration")
   
     show(dekor)
})

//Max
max.addEventListener("click",function(){

  //1.yöntem
  //  let maxProduct = urunler.sort((a,b)=>b.price - a.price)
       //maxProduct[0]
     
   //2.yöntem
   let sayac = urunler[0]
   urunler.forEach(element => {
       if(element.price>sayac.price){
        sayac=element
       }
   })
   show1(sayac)
})

//Min
min.addEventListener("click",function(){
    //1.yöntem
    let minProduct = urunler.sort((a,b)=>a.price - b.price)
    
     show1(minProduct[0])


    //2.yöntem
    // let sonuc = 99  // rasgele bir sayı, 1 milyonda girebiliriz büyük olsun yeter
    // urunler.forEach(element => {
    //     if(element.price<sonuc){
    //       sonuc=element
    //     }
    // })
    // console.log(sonuc) 
})

//Artan fiyat-----------------------------------
artan.addEventListener("click",function(){
  urunler.sort((a,b)=>a.price - b.price)

   show(urunler)  
})

//Azalan fiyat------------------------------------
azalan.addEventListener("click",function(){
  urunler.sort((a,b)=>b.price-a.price)

   show(urunler)
})

//GET------------------------------------------
async function get(){

const data = await fetch("https://dummyjson.com/products")
const dataJson = await data.json()
  
urunler = dataJson.products

urunler.forEach(element => {
  
  if(element.title != "OPPOF19"){

   main.innerHTML+=`  
        <div class="card">
        <img src="${element.images[0]}">
       <h2 class="title">${element.title}</h2>
       <h4 class="price">${element.price}$</h4>
       <p>${element.description}</p>
      </div>`
  }
  })

 }
 get()


 //Show
 function show(arrayName){
  main.innerHTML=" "
   arrayName.forEach(element => {
     main.innerHTML+=`  
     <div class="card">
     <img src="${element.images[0]}">
    <h2 class="title">${element.title}</h2>
    <h4 class="price">${element.price}$</h4>
    <p>${element.description}</p>
   </div>`
   })
}

//Show1
function show1(name){
 
 
    main.innerHTML=`  
    <div class="card">
    <img src="${name.images[0]}">
   <h2 class="title">${name.title}</h2>
   <h4 class="price">${name.price}$</h4>
   <p>${name.description}</p>
  </div>`
 
}


 
//bakım, dekor, kategorisi butonlar
// max min ürün fiyata sahip ürünü gösterme
//isme göre ürün arama















