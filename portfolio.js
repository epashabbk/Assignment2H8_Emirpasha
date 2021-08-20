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

const buttonSubmit = document.getElementById("buttonSubmit");
buttonSubmit.addEventListener("click",function(e){
    alert("tes")
}, false);   

function submitForm () {

    // if(document.getElementById("nama").value === "") alert("nama tidak boleh kosong")
    // else document.getElementById("titleNama").innerText = document.getElementById("nama").value

    const nama = document.getElementById("nama").value
    const role = document.getElementById("role").value
    const availability = document.getElementById("availability").value
    const usia = document.getElementById("usia").value
    const lokasi = document.getElementById("lokasi").value
    const pengalaman = document.getElementById("pengalaman").value
    const email = document.getElementById("email").value



    if( nama === "" || 
        role === "" || 
        availability === "" || 
        usia === "" || 
        lokasi === "" || 
        pengalaman === "" ||
        email === "" ) {
        
        alert("Semua data harus diisi")
    }
    else {
        document.getElementById("labelNama").innerText = nama
        document.getElementById("labelRole").innerText = role
        document.getElementById("labelAvailability").innerText = availability
        document.getElementById("labelUsia").innerText = usia
        document.getElementById("labelLokasi").innerText = lokasi
        document.getElementById("labelPengalaman").innerText = pengalaman
        document.getElementById("labelEmail").innerText = email
    }
 
}