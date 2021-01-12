
//participant list
var list=[];
function add(){
    var name = document.getElementById("text").value ;
    list.push(name);

    var ul=document.createElement("ul");
        ul.setAttribute("id","ulvalue");
            document.getElementById("ulList").appendChild(ul);
            for(var k=0;k<list.length;k++){
                var li=document.createElement("li");
                var y=document.createTextNode(list[k]);
            }
            li.appendChild(y);
            ul.appendChild(li); 
            
     document.getElementById("text").value="";
}


function reset() {
    location.reload();
}
/*
var switcher = document.querySelector('.themebtn');
switcher.addEventListener('click', function()
{
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light mode";
    }
    else {
        this.textContent = "Dark mode";
    }
    
}
)*/





