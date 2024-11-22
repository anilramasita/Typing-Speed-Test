let span=document.getElementById("span");
let Reset=document.getElementById("Reset");
let submit=document.getElementById("submit");
let area=document.getElementById("area");
let display=document.getElementById("display");
let para=document.getElementById("para");
let id=null;
let count=null;
let spinner=document.getElementById("spinner");
function request(){
    let url="https://apis.ccbp.in/random-quote";
    let options={
        method:"GET"
    };
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        display.textContent=jsonData.content;
    });
    spinner.classList.add("d-none");
}
function call(){
    count=1;
    id=setInterval(function() {
        span.textContent=count;
        count=count+1;
    }, 1000);
}

Reset.addEventListener("click",function(){
    clearInterval(id);
     spinner.classList.remove("d-none");
    request();
    call();
    area.value="";
    para.textContent="";
});

submit.addEventListener("click",function(){
    if(area.value===display.textContent){
        clearInterval(id);
        let extra=count-1;
        para.textContent="Congratulations! You did it in "+extra+" seconds";
        para.classList.add("textGreen");
        para.classList.remove("textRed");
        para.classList.remove("textBlack");
    }else if(area.value===""){
        para.textContent="Value should not be empty";
        para.classList.add("textBlack");
        para.classList.remove("textRed");
        para.classList.remove("textGreen");
    }
    else{
        para.textContent="You typed incorrect!";
        para.classList.add("textRed");
        para.classList.remove("textGreen");
        para.classList.remove("textBlack");
    }
});

call();
request();