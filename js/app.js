var shoeSizes = document.querySelectorAll(".shoe-size");
var shoeColours = document.querySelectorAll(".shoe-color");
var bgColor = document.querySelector(".shooes");
var shareIcon = document.querySelector(".share-icon");
var brandName = document.querySelector(".brand-name");
var addToCard = document.querySelector(".add-to-card-button");

shoeSizes.forEach(function (shoeSize, index) {
    shoeSize.addEventListener('click', function() {

      shoeSizes.forEach(function(size) {
          size.classList.remove("size-active");
      })

      this.classList.add("size-active");
    })
})

shoeColours.forEach(function(shoeColor) {
    shoeColor.addEventListener('click', function(event) {
        let changeColour = event.target;
        let backgroundChangeColor = changeColour.style.backgroundColor;
        bgColor.style.backgroundColor = backgroundChangeColor;
        shareIcon.style.color = backgroundChangeColor;
        brandName.style.backgroundColor = backgroundChangeColor;
        addToCard.style.backgroundColor = backgroundChangeColor;
        
        shoeColours.forEach(function(colour) {
            colour.classList.remove("shoe-colours");
        })

        this.classList.add("shoe-colours");
    })
})

function changeImage(imgae) {
    document.querySelector(".shooe-color img").src = imgae;
}


  
 