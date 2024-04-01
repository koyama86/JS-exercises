"use strict";

let mainBoard = document.getElementById("mainBoard");

function gettoukou() {
const now = new Date();

    let named = document.getElementById("name");

    let area = document.getElementById("area");
    
    // li要素を生成
    const createname = document.createElement("li");
    const createmain = document.createElement("li");
    const createspace = document.createElement("p");
 
    // 生成したil要素に属性を設定
    createname.textContent = named.value;
    createmain.textContent = area.value;

    mainBoard.prepend(createname, createmain,now.toLocaleDateString(),createspace);

    named.value ='';
    area.value = '';


}