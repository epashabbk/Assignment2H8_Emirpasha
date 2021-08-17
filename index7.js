// let punya_ktp = true
// let punya_sim = false

// if (punya_ktp){
//     alert("berhasil punya ktp")
// } else if (punya_sim)
//     alert("berhasil punya sim")

// punya_ktp


// let correct_password = true
// let incorrect_passwird = false

// if (correct_password){
//     alert("password berhasil")
// } else if (incorrect_passwird)
//     alert ("password tidak berhasil")



// function inputangka(){
// let hasil = prompt

// if (high_number && "100"){
//     alert("your grade is A")
// } else if ("80" || "60"){
//     alert("your grade is B")
// } else if ("40" || "60"){
//     alert("your grades is C")
// } else if (low_number){
//     alert("your grades is D")
// }
    
// }

// for(i=0; i<10; i++){
//     pushUp();
// }

// while(not bosan){
//     pushUp();
//     // 
// }

let urutan = 1;
while (urutan <= 20) {
    console.log (`Halo saya orang ke urutan ${urutan}`)
    urutan++
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text=""
for (let i = 1; i < 20; i++) {
  if (i%2 === 1){
    console.log (`Halo saya orang ke urutan ${i}`)
  }
    text += number[i] + "<br>";
}
console.log(11%2)

// document.getElementById("demo").innerHTML = text;
text = ''
let num = 4;
for (let i = 0; i <= num; i++){
    let baris = ""
    for (let j = 0; j < num; j++){
        baris += `O`
    }
    text += baris + '\n'
}
console.log(text);