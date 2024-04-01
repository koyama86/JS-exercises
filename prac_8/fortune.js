

function goUranai(){
    let ans = document.getElementById("ans");
    let rnd = Math.round((Math.random()*10));
    let named = document.getElementById("named");
    const inname = document.getElementById("inName");
    let uranai ="デフォルト";

switch(rnd){
    case 1:
    case 2:    
    uranai ="大吉";
    break;
    case 3:
    case 4:
    case 5:
        uranai ="中吉";
        break;
    case 6:
    case 7:
        uranai ="吉";
        break;
    case 8:
    case 9:
    case 10:
        uranai ="小吉";
        break;
}

    inname.textContent=named.value + "さんの今日の運勢";
    ans.textContent = uranai


}