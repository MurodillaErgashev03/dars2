const a = prompt("Ballni kiriting")

let user = a;

if ( 90 <= user && user <= 100 ) {
    console.log("grant");
}
else if (70 <= user && user < 90){
    console.log("kantrak");
}
else if (50 <= user && user < 70){
    console.log(" super kantrak");
}
else if (user < 50){
    console.log("O'qishga qabul qilinmadi");
}




