var xl = Number(document.querySelector("#xl").value) ;
var xu = Number(document.querySelector("#xu").value);
var btn1 = document.querySelector('#btn1');


function porcentaje(xrv, xr){ return (((xr-xrv)/xr)*100) };
var tas = "<p> <center>";

btn1.addEventListener('click', () => {
    let xl = Number(document.querySelector("#xl").value) ;
    let xu = Number(document.querySelector("#xu").value);
    var ecuacion = document.querySelector("#ecuacion").value

    switch(ecuacion){
        case "primera":
            // f(x)=e^(-x)-ln x 
            function ecuacionElegida(x){ return(Math.pow(Math.E, -x) - Math.log(x)) };
            console.log("primera")
            break;
        case "segunda":
            // x^3+x^2-3x-3 
            function ecuacionElegida(x){ return((Math.pow(x,3))+(Math.pow(x,2))-3*(x)-3)}
            console.log("segunda")
            break;
        case "tercera":
            // f(x)=arctang(x)+x-1
            function ecuacionElegida(x){ return ((Math.atan(x))+ x - 1) };
            console.log("tercera")
            break;
        }

    let fxl = ecuacionElegida(xl).toFixed(7)
    let fxu = ecuacionElegida(xu).toFixed(7)
    let por = 100
    let xrv = (xu - ((fxu * (xl-xu))/(fxl - fxu))).toFixed(7);
    let i = 0

  
    while (i < 30){
    
    let xr = xu - ((fxu * (xl-xu))/(fxl - fxu)).toFixed(7);
    let fxr = ecuacionElegida(xr).toFixed(7);
    let por = porcentaje(xr, xrv).toFixed(7);

    console.log(`Iteración ${i}:  xr = ${xr}  f(xr) = ${fxr}  por = ${por}` )


    if(Math.sign(fxr)=== -1){
        xl = xr
    }
    if(Math.sign(fxr) === 1){
        xu = xr
    }

    xrv = xr;
    i++
    fxu = ecuacionElegida(xu).toFixed(7);
    fxl = ecuacionElegida(xl).toFixed(7);
    
}


})

    


