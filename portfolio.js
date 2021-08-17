var a;
function show_hide()
{
    if(a==1)
        {
            document.getElementById("main_form").style.display="none";
            return a=0;
        }
    
    else
        {
            document.getElementById("main_form").style.display="block";
            return a=1;
        }

}

const form_fill = document.getElementById("formfill");
{
    form_fill.addEventListener("btn", (e) => {
        e.preventDefault();
        console.log("Form has been submitted!");
    });
} 


// document.getElementById("main_form").style.display==="none";

// var s1 = document.getElementById("section-1")
// if (s1.style.display === "none"){
//     s1.style.display = "block"
// } else {
//     s1.style.display = "none"
// }

// function sayHello() {
//     // alert("hello")
//     // console.log("hello")
//     var form = document.getElementById("form-section")
//     if (form.innerHTML === "") {
//         form.innerHTML = "container-2"
//     } else {
//         form.innerHTML = ""
//     }
// }