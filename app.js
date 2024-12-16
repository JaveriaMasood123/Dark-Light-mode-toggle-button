let butt=document.getElementById('butt');
let head=document.getElementById("head");
butt.onclick =() =>{
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="black";
     head.style.color="white";
     butt.textContent="click here for light mode"
       
}
else{
    document.body.style.backgroundColor="white";
    head.style.color="black";
    butt.textContent="click here for dark mode"
}
}

