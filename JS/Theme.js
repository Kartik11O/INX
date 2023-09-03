// This one is for "H" BTN-1
$(document).ready(()=>{
   $(".H").on('click',()=>{
    $("#Container-1").toggleClass("Theme-one")
    $("#Form-fill").toggleClass("Theme-one-Form-fill")
  
  





    $("#Container-1").removeClass("Theme-three")
    $("#Form-fill").removeClass("Theme-three-Form-fill")
    $("#Container-1").removeClass("Theme-two")
    $("#Form-fill").removeClass("Theme-two-Form-fill")
})
})



// This one is for "I" BTN-2
$(document).ready(()=>{
    $(".I").on('click',()=>{
        $("#Container-1").removeClass("Theme-one")
        $("#Form-fill").removeClass("Theme-one-Form-fill")
        $("#Container-1").removeClass("Theme-three")
        $("#Form-fill").removeClass("Theme-three-Form-fill")
        $("#Container-1").toggleClass("Theme-two")
        $("#Form-fill").toggleClass("Theme-two-Form-fill")
    })
})



// This one is for "J" BTN-3
$(document).ready(() => {
    $(".J").on('click', () => {
        $("#Container-1").removeClass("Theme-one")
        $("#Form-fill").removeClass("Theme-one-Form-fill")
        $("#Container-1").removeClass("Theme-two")
        $("#Form-fill").removeClass("Theme-two-Form-fill")
        $("#Container-1").toggleClass("Theme-three")
       $("#Form-fill").toggleClass("Theme-three-Form-fill")
    })
})