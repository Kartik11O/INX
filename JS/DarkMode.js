$(document).ready(() => {

  $(".toggle").click(() => {
    $("#Container-1").toggleClass("dark")
    $("#Logo").toggleClass("dark-me-1")
    $("#logo-name").toggleClass("Logo-name-bottom")
    $("#Form-fill").toggleClass("dark-me-Form-fill")
    $("input").css({ color: "white" })
    $("#Form-fill").toggleClass("Form-fill2")

    
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
