let top1 = document.getElementById("top")
let bot = document.getElementById("bot")
let topMenu = document.getElementById("top-menu")
let botMenu = document.getElementById("bot-menu")

function showTop(){
    top1.style.display = "grid";
    bot.style.display = "none";
    topMenu.style.color = "blue";
    botMenu.style.color = "white";

}

function showBot(){
    top1.style.display = "none";
    bot.style.display = "grid";
    topMenu.style.color = "white";
    botMenu.style.color = "blue";
}

const listTop = [
    {
        image: "../img/white-t-shirt.png",
        item: "White T-Shirt",
        price: "Rp. 100.000,00"
    },
    {
        image: "../img/blue-shirt.png",
        item: "Blue Shirt",
        price: "Rp. 310.000,00"
    },
    {
        image: "../img/black-leather-jacket.png",
        item: "Black Leather Jacket",
        price: "Rp. 500.000,00"
    },
    {
        image: "../img/white-collared-t-shirt.png",
        item: "White Collared T-Shirt",
        price: "Rp. 500.000,00"
    },
    {
        image: "../img/red-flannel-shirt.png",
        item: "Red & Black Flannel Shirt",
        price: "Rp. 350.000,00"
    }
];

function topDesc(index){
    document.getElementById("modal").style.display = "block";
    document.getElementById("image").innerHTML = `<img src="${listTop[index].image}" alt="img_${index}" width=200/>`;
    document.getElementById("product").innerHTML = listTop[index].item;
    document.getElementById("price").innerHTML = listTop[index].price;
}

function handleClose() {
    document.getElementById("modal").style.display = "none";
}

const listBot = [
    {
        image: "../img/blue-jeans.png",
        item: "Blue Jeans",
        price: "Rp. 250.000,00"
    },
    {
        image: "../img/beige-shorts.png",
        item: "Beige Shorts",
        price: "Rp. 180.000,00"
    },
    {
        image: "../img/gray-sweatpants.png",
        item: "Gray Sweatpants",
        price: "Rp. 220.000,00"
    },
    {
        image: "../img/blue-ripped-jeans.png",
        item: "Blue Ripped Jeans",
        price: "Rp. 255.000,00"
    },
    {
        image: "../img/white-pants.png",
        item: "White Jeans",
        price: "Rp. 235.000,00"
    }
];

function botDesc(index){
    document.getElementById("modal").style.display = "block";
    document.getElementById("image").innerHTML = `<img src="${listBot[index].image}" alt="img_${index}" width=200 height=200/>`;
    document.getElementById("product").innerHTML = listBot[index].item;
    document.getElementById("price").innerHTML = listBot[index].price;
}

document.getElementById("subscribe-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phoneNumber").value;
    let country = document.getElementById("country").value;
    let terms = document.getElementById("terms");

    let errorName = document.getElementById("errorName");
    let errorEmail = document.getElementById("errorEmail");
    let errorPhone = document.getElementById("errorPhone");
    let errorCountry = document.getElementById("errorCountry");
    let errorTerms = document.getElementById("errorTerms");

    if(name.length == 0){
        errorName.innerHTML = "*Cannot be empty";
        document.getElementById("name").style.marginBottom = "0px";
        errorName.style.marginBottom = "30px";
    } else {
        errorName.innerHTML = "";
        document.getElementById("name").style.marginBottom = "30px";
        errorName.style.marginBottom = "0px";
    }

    if(!validateEmail(email)){
        errorEmail.innerHTML = "*Invalid email";
        document.getElementById("email").style.marginBottom = "0px";
        errorEmail.style.marginBottom = "30px";
    } else if (validateEmail(email)){
        errorEmail.innerHTML = "";
        document.getElementById("email").style.marginBottom = "30px";
        errorEmail.style.marginBottom = "0px";
    }

    if(!validatePhone(phone)){
        errorPhone.innerHTML = "*Must between 10 to 12 number";
        document.getElementById("phoneNumber").style.marginBottom = "0px";
        errorPhone.style.marginBottom = "30px";
    } else if(validatePhone(phone)){
        errorPhone.innerHTML = "";
        document.getElementById("phoneNumber").style.marginBottom = "30px";
        errorPhone.style.marginBottom = "0px";
    }

    if(country == "default"){
        errorCountry.innerHTML = "*Pick a country";
        document.getElementById("country").style.marginBottom = "0px";
        errorCountry.style.marginBottom = "30px";
    } else if (country != "default"){
        errorCountry.innerHTML = "";
        document.getElementById("country").style.marginBottom = "30px";
        errorCountry.style.marginBottom = "0px";
    }

    if(!terms.checked){
        errorTerms.innerHTML = "*You must agree to the terms and conditions";
        document.getElementById("terms").style.marginBottom = "0px";
        errorTerms.style.marginBottom = "30px";
    } else if(terms.checked){
        errorTerms.innerHTML = "";
        document.getElementById("terms").style.marginBottom = "30px";
        errorTerms.style.marginBottom = "0px";
    }

    function validateEmail(email){
        return email.endsWith(".com") && email.indexOf("@") != -1;
    }

    function validatePhone(phone){
        let isNum = false;
        for (let i = 0; i < phone.length; i++){
            if(!isNaN(phone[i]) && (phone.length > 9 && phone.length < 13)){
                isNum = true;
            }
        }
        if(isNum){
            return true;
        } else {
            return false;
        }
    }

})