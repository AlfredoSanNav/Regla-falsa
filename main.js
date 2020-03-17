var xl = Number(document.querySelector("#xl").value) ;
var fxl = Number(document.querySelector("#fxl").value);
var xu = Number(document.querySelector("#xu").value);
var fxu = Number(document.querySelector("#fxu").value);
var btn1 = document.querySelector('#btn1');
function formula(x){ return((Math.pow(x,3))+(Math.pow(x,2))-3*(x)-3) }

btn1.addEventListener('click', () => {
    let xl = Number(document.querySelector("#xl").value) ;
    let fxl = Number(document.querySelector("#fxl").value);
    let xu = Number(document.querySelector("#xu").value);
    let fxu = Number(document.querySelector("#fxu").value);    
    let i = 1
    let fxr
    let xr
while(i < 15){
    xr = xu - ((fxu * (xl-xu))/(fxl - fxu));
    fxr = formula(xr).toFixed(7)
    
    console.log("Iteración " + i)
    console.log("Xr = " + xr)
    console.log("f(xr) = " + fxr)
    i++

    if(Math.sign(fxr) === -1 && xr > xl){
        xl = xr
    }
    if(Math.sign(fxr) === 1 && xr < xu){
        xu = xr
    }
    
    fxu = formula(xu).toFixed(7)
    fxl = formula(xl).toFixed(7)

}


})