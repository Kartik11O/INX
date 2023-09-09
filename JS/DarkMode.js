$(document).ready(() => {
  var Container_1 = $("#Container-1")
  $(".toggle").click(() => {
    $("#Container-1").toggleClass("dark")
    $("#Logo").toggleClass("dark-me-1")
    $("#logo-name").toggleClass("Logo-name-bottom")
    $("#Form-fill").toggleClass("dark-me-Form-fill")
    $("input").css({ color: "white" })
    $("#Form-fill").toggleClass("Form-fill2")

    // Alert for theme in Dark Mode
    //   $(".H , .I , .J").off("click").on('click',function(){
    //     if(Container_1.hasClass("dark")){
    //       alert("Themes won't work in dark mode")
    //     }

    // else{
    // // Nothing will happen
    // }

    //   }) 
  })
  
})







// Second way of doing this

// $(document).ready(() => {

//   $(".light").change(() => {
//     $("#Container-1").toggleClass("dark")
//     $("#Logo").toggleClass("dark-me-1")
//     $("#logo-name").toggleClass("Logo-name-bottom")
//     $("#Form-fill").toggleClass("dark-me-Form-fill")
//     $("input").css({ color: "white" })
//     $("#Form-fill").toggleClass("Form-fill2")

    
// })

// })
