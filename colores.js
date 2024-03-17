/*Captura de datos*/
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
/* Modificaciones*/

div1.style.backgroundColor="blue";
div1.style.width = "200px";
div1.style.height = "200px";
div1.addEventListener("click",()=>{
    div1.style.backgroundColor="black"
})

div2.style.backgroundColor="red";
div2.style.width = "200px";
div2.style.height = "200px";
div2.addEventListener("click",()=>{
    div2.style.backgroundColor="black"
})

div3.style.backgroundColor="green";
div3.style.width = "200px";
div3.style.height = "200px";
div3.addEventListener("click",()=>{
    div3.style.backgroundColor="black"
})

div4.style.backgroundColor="yellow";
div4.style.width = "200px";
div4.style.height = "200px";
div4.addEventListener("click",()=>{
    div4.style.backgroundColor="black"
})

key.style.backgroundColor="white";
key.style.border = "1px solid black";
key.style.width = "200px";
key.style.height = "200px";


document.addEventListener('keydown', (event)=> {
    if (event.key === 'a') {
        key.style.backgroundColor="pink"
    } else if (event.key === 's') {
        key.style.backgroundColor="orange"
    }
    else if (event.key === 'd') {
        key.style.backgroundColor="skyblue"
    }
    else if (event.key === 'q') {
        var newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.backgroundColor="purple";
    }
    else if (event.key === 'w') {
        var newDiv2 = document.createElement("div");
        document.body.appendChild(newDiv2);
        newDiv2.style.width = "200px";
        newDiv2.style.height = "200px";
        newDiv2.style.backgroundColor="gray";
    }
    else if (event.key === 'e') {
        var newDiv3 = document.createElement("div");
        document.body.appendChild(newDiv3);
        newDiv3.style.width = "200px";
        newDiv3.style.height = "200px";
        newDiv3.style.backgroundColor="brown";
    }
    });
