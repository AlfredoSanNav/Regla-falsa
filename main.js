var xl = Number(document.querySelector("#xl").value) ;
var fxl = Number(document.querySelector("#fxl").value);
var xu = Number(document.querySelector("#xu").value);
var fxu = Number(document.querySelector("#fxu").value);
var btn1 = document.querySelector('#btn1');
function formula(x){ return((Math.pow(x,3))+(Math.pow(x,2))-3*(x)-3) };
function porcentaje(xrv, xr){ return (Math.abs(((xr-xrv)/xr)*100)) };
function formula2(x){ return ((Math.atan(x))+ x - 1) };
var tas = "<p> <center>";

btn1.addEventListener('click', () => {
    let xl = Number(document.querySelector("#xl").value) ;
    let fxl = Number(document.querySelector("#fxl").value);
    let xu = Number(document.querySelector("#xu").value);
    let fxu = Number(document.querySelector("#fxu").value);    
    let i = 1;
    let fxr;
    let xr;
    let xrv = xr;
    let por;
while(i < 15){
    xrv = xr;
    xr = xu - ((fxu * (xl-xu))/(fxl - fxu)).toFixed(7);
    fxr = formula2(xr).toFixed(7);
    por = (porcentaje(xr, xrv)).toFixed(7);


    document.write(tas + "<li>" + "xl = " + xl + "<li>" + " fxl = " +fxl + "<br>");
    document.write(tas + "<li>" + "xu = " + xu + "<li>" + " fxu = " + fxu + "<br> <hr>");
    console.log("Iteración " + i);
    document.write(tas + "<li>" + "Iteración" + i + "<br>");
    console.log("Xr = " + xr);
    document.write(tas + "Xr = " + xr + "<br>");
    console.log("f(xr) = " + fxr);
    document.write(tas + "f(xr) = " + fxr + "<br>");
    console.log("Porcentaje de error = " + por);
    document.write(tas + "Porcentaje de error = " + por + "<br> <hr>");
    i++;

    if(Math.sign(fxr) === -1 && xr > xl){
        xl = xr
    }
    if(Math.sign(fxr) === 1 && xr < xu){
        xu = xr
    }
    
    fxu = formula2(xu).toFixed(7);
    fxl = formula2(xl).toFixed(7);

}


})