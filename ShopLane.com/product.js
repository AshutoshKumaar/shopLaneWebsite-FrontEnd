const bigImages = document.querySelector(".big_image img");
const smallImages = document.querySelectorAll(".smlImg img");
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].addEventListener("click", function () {
        bigImages.src = smallImages[i].src;
        bigImages.classList.add("border_image");
        if (i == 0) {
            smallImages[0].classList.add("border_image")
            smallImages[1].classList.remove("border_image");
            smallImages[2].classList.remove("border_image");
            smallImages[3].classList.remove("border_image");
            smallImages[4].classList.remove("border_image");
        } else if (i == 1) {
            smallImages[1].classList.add("border_image")
            smallImages[0].classList.remove("border_image")
            smallImages[2].classList.remove("border_image");
            smallImages[3].classList.remove("border_image");
            smallImages[4].classList.remove("border_image");

        } else if (i == 2) {
            smallImages[2].classList.add("border_image");
            smallImages[0].classList.remove("border_image");
            smallImages[1].classList.remove("border_image");
            smallImages[3].classList.remove("border_image");
            smallImages[4].classList.remove("border_image");

        } else if (i == 3) {
            smallImages[3].classList.add("border_image");
            smallImages[0].classList.remove("border_image");
            smallImages[1].classList.remove("border_image");
            smallImages[2].classList.remove("border_image");
            smallImages[4].classList.remove("border_image");


        } else if (i == 4) {
            smallImages[0].classList.remove("border_image");
            smallImages[1].classList.remove("border_image");
            smallImages[2].classList.remove("border_image");
            smallImages[3].classList.remove("border_image");
            smallImages[4].classList.add("border_image");
        }

    })
}


// jquery
$(document).ready(function () {
    $(".icon").click(function () {
        $(".navList ul").toggle();
    })
})

var checkOut = document.querySelector(".Add_to_cart_btn button");
var cartCount = document.querySelector("#cart-count");
var productPage = document.getElementsByClassName("p");
var impButton = `<div class="Add_to_cart_btn">
                    <button>Add to cart</button>
                  </div>`
console.log(productPage)
var countData = 0;

checkOut.addEventListener("click", function () {
    countData += 1;
    cartCount.innerHTML = countData;
    countData;
})



