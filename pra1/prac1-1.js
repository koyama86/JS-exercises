"use strict"
let height = window.prompt("身長を入力してください");
let ticket = false;

if (!height) {   
    window.alert("入力がないと判定できません");   


}else if(!height.match(/^[0-9]+$/)){
    window.alert("半角数値じゃないとだめだよ");
    
}else if(height >= 100){
    if(window.confirm("プレミアムチケットは持ってますか？")){
        window.alert("プレミアムシートに乗車可能です");
    }else {
        window.alert("通常のシートに乗車可能です");
    }
}else if(height >= 90){
        window.alert("付き添いありで乗車可能です");
}
