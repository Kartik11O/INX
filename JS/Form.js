let Holder = document.getElementById("Holder")
let Form_fill = document.getElementById("Form-fill")
let Form = document.getElementById("form")
let para = document.getElementById("para")



// Load the DOM Fully
$(window).on('load', () => {
    setTimeout(() => {
        $("#loading").fadeOut(1000);
    },1000);
})


// Opens the form and close, "2" means closing CSS code 
function FormOpen() {
    if (Holder.classList != "Holder-open") {
        Holder.classList.remove("Holder-open2")
        Holder.classList.add("Holder-open")
        Form_fill.classList.remove("Form-show2")
        Form_fill.classList.add("Form-show")
        Form.style.display = "flex"
        para.style.display = "block"
        console.log("a")
    }

    else {
        Holder.classList.remove("Holder-open")
        Holder.classList.add("Holder-open2")
        Form_fill.classList.remove("Form-show")
        Form_fill.classList.add("Form-show2")
        Form.style.display = "none"
        para.style.display = "none"
        console.log("b")
    }
}

// Theme BTN slider
$(document).ready(() => {
    $("#Theme-btn").on('click',() => {
        $("#drop").slideToggle()
    })

})

$(document).ready(() => {
    $(".BOX").hover(function () {
        console.log("radt")
        $(this).animate({
            height: '62px',
            width: '62px',
            // top: '2px'
        },'fast')
    },
        function () {
            $(this).animate({
                height: '55px',
                width: '55px',
                top: '0px'
            })
        }
    )

})

// $(document).ready(() => {
//     $(".BOX").waypoint(() => {
//         console.log("daddasdsadasas")
//         $(".BOX").css({
//             transition: '0.3s',
//             transform: 'translateY(-30px)',
//             opacity: '1'
//         })
//     }
//     )
// })
























