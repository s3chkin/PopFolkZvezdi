
let imgEl = document.querySelector("div.content img");

let header1 = document.querySelector(`p.galena`);     //за скриване на tekst
imgEl.addEventListener("mouseover", function () {
    imgEl.setAttribute("src", "./images/galena2.jpg");
    header1.style.display = 'none';
})

 imgEl.addEventListener("mouseout", function () {
    imgEl.setAttribute("src", "./images/galena1.png");
    header1.style.display = 'block';
})


//preslava
let imgE2 = document.querySelector("div.preslava img");
let header2 = document.querySelector(`p.preslava`);    
imgE2.addEventListener("mouseover", function () {
    imgE2.setAttribute("src", "./images/preslava2.jpg " );
    header2.style.display = 'none';
})

imgE2.addEventListener("mouseout", function () {
    imgE2.setAttribute("src", "./images/preslava1.png");
    header2.style.display = 'block';
})

//alisia
let imgAlisia = document.querySelector("div.alisia img");
let header3 = document.querySelector(`p.alisia`);   
imgAlisia.addEventListener("mouseover", function () {
    imgAlisia.setAttribute("src", "./images/alisiya2.jpg " );
    header3.style.display = 'none';
})

imgAlisia.addEventListener("mouseout", function () {
    imgAlisia.setAttribute("src", "./images/alisia1.jpg");
    header3.style.display = 'block';
})

//boni
let imgBoni = document.querySelector("div.boni img");
let header4 = document.querySelector(`p.boni`);
imgBoni.addEventListener("mouseover", function () {
    imgBoni.setAttribute("src", "./images/boni2.jpg");
    header4.style.display = 'none';
})

imgBoni.addEventListener("mouseout", function () {
    imgBoni.setAttribute("src", "./images/boni1.jpg");
    header4.style.display = 'block';
})

//luna
let imgLuna = document.querySelector("div.luna img");
let header5 = document.querySelector(`p.luna`);
imgLuna.addEventListener("mouseover", function () {
    imgLuna.setAttribute("src", "./images/luna2.jpg");
    header5.style.display = 'none';
})

imgLuna.addEventListener("mouseout", function () {
    imgLuna.setAttribute("src", "./images/luna1.jpg");
    header5.style.display = 'block';
})
