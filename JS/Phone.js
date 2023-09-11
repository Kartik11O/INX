if(screen.width < 900) { 
    function FormOpen() {
        if (Holder.classList != "Holder-open") {
            Holder.classList.remove("Holder-open2")
            Holder.classList.add("Holder-open")
            Form_fill.classList.remove("Form-show2")
            Form_fill.classList.add("Form-show")
            Form.style.display = "flex"
            para.style.display = "flex"
            $("#Phone-btn-close").fadeIn().css({
                display: 'flex'
            })
            console.log("a")
        }
    
        else {
            Holder.classList.remove("Holder-open")
            Holder.classList.add("Holder-open2")
            Form_fill.classList.remove("Form-show")
            Form_fill.classList.add("Form-show2")
            Form.style.display = "none"
            para.style.display = "none"
            $("#Phone-btn-close").fadeOut()
            console.log("b")
            
        }
    }
} else {




}