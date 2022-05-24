document.addEventListener('DOMContentLoaded', () => {

function botao(){

    //random = Math.random() * 5 + 1; 
    let rndInt = Math.floor(Math.random() * 5 + 1);
    let rndint = Math.floor(Math.random() * 5 + 1);
    //console.log(rndInt)

    let x = rndInt;
    let z = rndint;

    let c = "Vitoria";
    let a = "tente novamente";

    //alert(x)
    document.getElementById("num1").innerHTML = x;
    document.getElementById("num2").innerHTML = z;


if(x==z || x/2==z || z/2==x)
{
    document.getElementById("num3").innerHTML = c;
}
else
{
    document.getElementById("num3").innerHTML = a;
}

}    

document.getElementById('botao').addEventListener("click", botao);
});