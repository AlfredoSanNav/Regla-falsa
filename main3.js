var btn1 = document.querySelector('#btn1');
 
btn1.addEventListener("click",()=>{
    let xl = Number(document.querySelector("#xl").value);
    let xu = Number(document.querySelector("#xu").value);
    let fxu = Number((Math.atan(xu))+ xu -1).toFixed(7);
    let fxl = Number((Math.atan(xl))+ xl -1).toFixed(7);

    console.log(xl)
    console.log(xu)
    console.log(fxl)
    console.log(fxu)

    let xr = xu-((fxu*(xl-xu))/(fxl-fxu)).toFixed(7);
    let fxr = Number((Math.atan(xr))+ xr -1).toFixed(7);

    console.log(xr)
    console.log(fxr)

    for(i=0; i<10; i++){
        if(xl > xr ){

            xl = xr
            fxl = fxr
        }
        if(xu > xr ){

            xu = xr
            fxu = fxr
        }
        fxu = Number((Math.atan(xu))+ xu -1).toFixed(7)
        fxl = Number((Math.atan(xl))+ xl -1).toFixed(7)
        xr = xu-((fxu*(xl-xu))/(fxl-fxu)).toFixed(7)
        fxr = Number((Math.atan(xr))+ xr -1).toFixed(7)
        console.log(` xl = ${xl} xu = ${xu} xr = ${xr} fxl = ${fxl} fxu = ${fxu} fxr = ${fxr}`)
    }
})