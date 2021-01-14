
//participant list
var list=[];
var copyList=[];
function add(){
    var name = document.getElementById("text").value ;
    list.push(name);
    copyList.push(name);

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


// this function use for add team name

var teamList=[];
function onAdd(){
    var team=document.getElementById("teamText").value ;
    teamList.push(team);

    var ulteam=document.createElement("ul");
        ulteam.setAttribute("id","teamvalue");
            document.getElementById("ulTeam").appendChild(ulteam);
            for(var i=0;i<teamList.length;i++){
                var liteam=document.createElement("li");
                var y=document.createTextNode(teamList[i]);
            }
            liteam.appendChild(y);
            ulteam.appendChild(liteam); 
            
     document.getElementById("teamText").value="";
}


//this start function use for genrate team

var listDisplay=[];
var chunk;
function onstart(){
     for(var i=0;i<list.length;i++)
     {
         listDisplay.push(copyList.splice(Math.random()*(copyList.length-1),1).pop());
     }
     document.getElementById("randomelist").innerHTML=listDisplay + ""+list.length;

     if(listDisplay.length%2==0){
         chunk=listDisplay.length/2;
     }

     var d=listDisplay.slice(0,chunk);
     var h=listDisplay.slice(chunk,chunk+listDisplay.length);

     document.getElementById("randomelist").innerHTML=d;
     document.getElementById("randomelist2").innerHTML=h; 



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





