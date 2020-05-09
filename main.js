var xl = Number(document.querySelector("#xl").value) ;
var xu = Number(document.querySelector("#xu").value);
var ecuacion = document.querySelector("#ecuacion")
var btn1 = document.querySelector('#btn1');
 

btn1.addEventListener("click",()=>{
    let fxu = (Math.pow(Math.E, -xu) - Math.log(xu))
    let fxl = (Math.pow(Math.E, -xl) - Math.log(xl))
    let xr = xu - ((fxu * (xl-xu))/(fxl - fxu)).toFixed(7)
    let fxr = (Math.pow(Math.E, -xr) - Math.log(xr))

    console.log(fxu + fxl + xr + fxr)


})