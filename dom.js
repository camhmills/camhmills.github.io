const container = document.querySelector(".main-container");

const hiPriority = document.querySelector("#highPriority");
const medPriority = document.querySelector("#medPriority");
const lowPriority = document.querySelector("#lowPriority");

const input = document.querySelector(".input");
const submitbuttonhi = document.querySelector(".submit-buttonhi");
const submitbuttonmed = document.querySelector(".submit-buttonmed");
const submitbuttonlo = document.querySelector(".submit-buttonlo");

function appendHigh(){
    const inputvalue = input.value
    var newItem = document.createElement("li")
    newItem.append(inputvalue);
    hiPriority.append(newItem);
}

function appendMed(){
    const inputvalue = input.value
    var newItem = document.createElement("li")
    newItem.append(inputvalue);
    medPriority.append(newItem);
}

function appendLow(){
    const inputvalue = input.value
    var newItem = document.createElement("li")
    newItem.append(inputvalue);
    lowPriority.append(newItem);
}
submitbuttonhi.onclick = () => appendHigh();
submitbuttonmed.onclick = () => appendMed();
submitbuttonlo.onclick = () => appendLow();