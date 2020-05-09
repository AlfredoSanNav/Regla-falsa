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
    let fxr = Number(Math.exp(-xr)-(Math.log(xr)));

    console.log(fxr)

    for(i=0; i<10; i++){
        if(fxr > fxl ){
            xl = xr
            fxl = fxr
        }
        if(fxr < fxu ){
            xu = xr
            fxu = fxr
        }
        fxu = Number(Math.exp(-xu)-(Math.log(xu))).toFixed(7)
        fxl = Number(Math.exp(-xl)-(Math.log(xl))).toFixed(7)
        xr = xu-((fxu*(xl-xu))/(fxl-fxu)).toFixed(7)
        fxr = Number(Math.exp(-xr)-(Math.log(xr))).toFixed(7)
        console.log(` xl = ${xl} xu = ${xu} xr = ${xr} fxl = ${fxl} fxu = ${fxu} fxr = ${fxr}`)
    }
})