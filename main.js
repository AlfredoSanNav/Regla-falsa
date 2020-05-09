var ecuacion = document.querySelector("#ecuacion")
var btn1 = document.querySelector('#btn1');
 

btn1.addEventListener("click",()=>{
    let xl = Number(document.querySelector("#xl").value);
    let xu = Number(document.querySelector("#xu").value);
    let fxu = Number(Math.exp(-xu)-(Math.log(xu)));
    let fxl = Number(Math.exp(-xl)-(Math.log(xl)));

    console.log(fxu)
    console.log(fxl)

    let xr = xu-((fxu*(xl-xu))/(fxl-fxu));
    console.log(xr)

    for(i=0; i<10; i++){
        
    }
})