let pon = document.getElementById("pon");
let element =document.getElementById("hand");
let e=document.getElementById("enemy");
let a=document.getElementById("aws");

function btnClick(){
    let rnd = (Math.random()*3);

    pon.style.cssText="opacity: 1";
    element.textContent = "パー";

    if(rnd>2){
        my = 2;
        e.textContent = "パー";
    }else if(rnd>1){
        my=1;
        e.textContent = "チョキ";
    }else {
        my=0;
        // e 2
        e.textContent = "グー";
    }

    switch(my){
        case 0 :
            // g
            a.textContent="あいこ";
            break;
        case 1 :
            // t
            a.textContent="まけ";
            break;
        case 2 :
            // p
            a.textContent="かち";
            break;
    }

}

function btnClick3(){
    let rnd = (Math.random()*3);

    pon.style.cssText="opacity: 1";
    element.textContent = "チョキ";
    if(rnd>2){
        my = 2;
        e.textContent = "パー";
    }else if(rnd>1){
        my=1;
        e.textContent = "チョキ";
    }else {
        my=0;
        // e 2
        e.textContent = "グー";
    }

    switch(my){
        case 0 :
            // g
            a.textContent="かち";
            break;
        case 1 :
            // t
            a.textContent="あいこ";
            break;
        case 2 :
            // p
            a.textContent="まけ";
            break;
    }
}

function btnClick2(){
    let rnd = (Math.random()*3);

    pon.style.cssText="opacity: 1";
    element.textContent = "グー";
    if(rnd>2){
        my = 2;
        e.textContent = "パー";
    }else if(rnd>1){
        my=1;
        e.textContent = "チョキ";
    }else {
        my=0;
        // e 2
        e.textContent = "グー";
    }

    switch(my){
        case 0 :
            // g
            a.textContent="まけ";
            break;
        case 1 :
            // t
            a.textContent="かち";
            break;
        case 2 :
            // p
            a.textContent="あいこ";
            break;
    }
}