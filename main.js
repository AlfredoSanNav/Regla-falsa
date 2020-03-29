var xl = Number(document.querySelector("#xl").value) ;
var xu = Number(document.querySelector("#xu").value);
var btn1 = document.querySelector('#btn1');


function porcentaje(xrv, xr){ return (Math.abs(((xr-xrv)/xr)*100)) };

// f(x)=e^(-x)-ln x 
function formula1(x){ return(Math.pow(Math.E, -x) - Math.log(x)) };
// x^3+x^2-3x-3 
function formula2(x){ return((Math.pow(x,3))+(Math.pow(x,2))-3*(x)-3)}
// f(x)=arctang(x)+x-1
function formula3(x){ return ((Math.atan(x))+ x - 1) };
var tas = "<p> <center>";

btn1.addEventListener('click', () => {
    let xl = Number(document.querySelector("#xl").value) ;
    let xu = Number(document.querySelector("#xu").value);

    let fxl = formula1(xl).toFixed(7)
    let fxu = formula1(xu).toFixed(7);    
    let por = 100
    let xrv = (xu - ((fxu * (xl-xu))/(fxl - fxu))).toFixed(7);
    let i = 1

  
    while (por < 1){
    
    let xr = xu - ((fxu * (xl-xu))/(fxl - fxu)).toFixed(7);
    let fxr = formula1(xr).toFixed(7);
    let por = (porcentaje(xr, xrv)).toFixed(7);

    console.log(`Iteración ${i}:  xr = ${xr}  f(xr) = ${fxr}  por = ${por}` )


    if(Math.sign(fxr) === -1 && xr > xl){
        xl = xr
    }
    if(Math.sign(fxr) === 1 && xr < xu){
        xu = xr
    }
    
    fxu = formula1(xu).toFixed(7);
    fxl = formula1(xl).toFixed(7);
    xrv = xr;
}


})

    


