let firstIndex = 0;
// automaticalSliders()
function automaticalSliders(){
    let pics;
    const Images = document.querySelectorAll(".pic");
    const  Indicators = document.querySelectorAll(".dot");
    
    for(pics = 0; pics < Images.length; pics++){
        Images[pics].style.display = "none";
        Images[pics].style.backgroundSize = "0%"
     
       
    }
    firstIndex++;
    if(firstIndex > Images.length){
        firstIndex = 1;   
    }
    for (pics = 0; pics < Indicators.length; pics++) {
        Indicators[pics].className = Indicators[pics].className.replace( "active", " ");
      }
   
    Images[firstIndex -1].style.display = "block";
    Images[firstIndex -1].style.backgroundSize = "100%";
    Indicators[firstIndex - 1].className += " active";
    setTimeout(automaticalSliders, 3000);

}
automaticalSliders()

$(document).ready(function () {
    $(".icon").click(function () {
        $(".navList ul").toggle();
    })
})

// JavaSript for FirstProduct Pages




