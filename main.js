



const changePrices = () =>{
const carBtn = document.getElementById('carBtn');
const truckBtn = document.getElementById('truckBtn');
const interiorPrice = document.getElementById('interiorPrice');
const premiumPrice = document.getElementById('premiumPrice');
const superPrice = document.getElementById('superPrice');



    if (carBtn.checked){
        interiorPrice.innerText = '179';
        premiumPrice.innerText = '229';
        superPrice.innerText = '279';
    } else if (truckBtn.checked){
        interiorPrice.innerText = '199';
        premiumPrice.innerText = '249';
        superPrice.innerText = '299';
    }
}

/*
function myFunction() {
    if (document.getElementById("radio-restaurant").checked){
        document.getElementById("button").innerHTML = "<a href='./restaurant.html'>Submit</a>";
    } else if (document.getElementById("radio-hotel").checked){
        document.getElementById("button").innerHTML = "<a href='./hotel.html'>Submit</a>"
    }
}
*/