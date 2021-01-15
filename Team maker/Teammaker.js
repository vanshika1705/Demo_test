
//Adding participant name in participant list
var list=[];
function ParticipantList(){
    var name = document.getElementById("text").value ;
    list.push(name);
    var ul=document.createElement("ul");
        ul.setAttribute("id","ulvalue");
            document.getElementById("ulList").appendChild(ul);
            var li=document.createElement("li");
        for(var k=0;k<list.length;k++){
               
               var y=document.createTextNode(list[k]);
            }
            li.appendChild(y);
            ul.appendChild(li); 
            
     document.getElementById("text").value="";
}


// Add Team Title in Team List

var teamList=[];
function TeamList(){
    var team=document.getElementById("teamText").value ;
    teamList.push(team);

    var ulteam=document.createElement("ul");
        ulteam.setAttribute("id","teamvalue");
            document.getElementById("ulTeam").appendChild(ulteam);
            var liteam=document.createElement("li");
           for(var i=0;i<teamList.length;i++){
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
         
        var listDisplay= list.sort( function sort(){return 0.5- Math.random()*(list.length)});
        
     }

         chunk=listDisplay.length/2;

     var d=listDisplay.slice(0,chunk);
     var h=listDisplay.slice(chunk,chunk+listDisplay.length);
     let x = d.join(" <br> ");
     let y = h.join(" <br> ");
     document.getElementById("partTeam1List").innerHTML=x;
     document.getElementById("partTeam2List").innerHTML=y; 



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



