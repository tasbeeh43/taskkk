


var x =document.querySelector("#example");
    document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll("button").forEach(function(b){

        b.onclick = function(){
            document.querySelector("#example").style.color =b.dataset.color;
        }
    });

});


document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("form").onsubmit = function(){
        var value =document.querySelector("#input").value;
        var myLi = document.createElement('li');
        myLi.innerHTML= value;
        var result = document.querySelector("#result");
        if(value==""){
            return false;
        }else{
        result.appendChild(myLi);
        document.querySelector("#input").value=" ";
        return false;
        }
    }

});