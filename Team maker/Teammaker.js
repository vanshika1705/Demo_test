
//Adding participant name in participant list

var participantList=[];

function onparticipantList(){
    var name = document.getElementById("text").value;
    participantList.push(name);
  
    var ul=document.createElement("ul");
        ul.setAttribute("id","ulvalue");
            document.getElementById("ulList").appendChild(ul);
            var li=document.createElement("li");
            for(var k=0;k<participantList.length;k++){     

                var y=document.createTextNode(participantList[k]);

                console.log(participantList[k]);
                console.log(y);
            }
            li.appendChild(y);
            ul.appendChild(li); 
            
     document.getElementById("text").value="";
     console.log(participantList);
}

// Add Team Title in Team List

var teamList=[];
function onteamList(){
    var team=document.getElementById("teamText").value ;
    teamList.push(team);

    var ulteam=document.createElement("ul");
        ulteam.setAttribute("id","teamvalue");
            document.getElementById("ulTeamlist").appendChild(ulteam);
            var liteam=document.createElement("li");

            for(var i=0;i<teamList.length;i++){

                var teams=document.createTextNode(teamList[i]);
            }
            liteam.appendChild(teams);
            ulteam.appendChild(liteam); 
            
     document.getElementById("teamText").value="";
}


//this function use for create div tag with id
var b=0;
var m=1;
var n=0;
function divNumber(datalist){
    var teamresult = document.createElement("div"); 
    teamresult.setAttribute("id","teamresult");
    document.getElementById('ParticipantTeamList').appendChild(teamresult);
    var resHead = document.createElement("div");
    resHead.setAttribute("id","participantTeamListHead");
    var h3 = document.createElement("h3");
    var res = document.createElement("div");
        res.id=m;

        var x = document.createTextNode(teamList[b]); // created node for teamList[]

    h3.appendChild(x);                  // append it to the main division
    resHead.appendChild(h3);
    resHead.appendChild(res);
    teamresult.appendChild(resHead);
    b++;

    var d=datalist.slice(n,n+splitList).join("<br/>");
    n+=splitList;


    return document.getElementById(m).innerHTML=d;

}

//this start function use for genrate team

var randomelistDisplay=[];
var splitList;
function onstart(){
    
    
    var lengthList=participantList.length;

    for(var i=0;i<lengthList;i++){
        var randomeNumber = Math.floor(Math.random()*participantList.length);

        randomelistDisplay.push(participantList[randomeNumber]);
        participantList.splice(randomeNumber,1);
    }

     splitList=randomelistDisplay.length/teamList.length;
    
    
   /* if(randomelistDisplay.length%2==0){

        splitList=randomelistDisplay.length/teamList.length;
    }
    else{
        splitList=randomelistDisplay.length/teamList.length;
    } */
    
     for(var i=0;i<teamList.length;i++){
            divNumber(randomelistDisplay);
            m++;
        } 

    //var d = randomelistDisplay.slice(0,splitList).join("<br/>");
    //var k = randomelistDisplay.slice(splitList, splitList+randomelistDisplay.length).join("<br/>");

    //document.getElementById("randomelist").innerHTML=d;
    //document.getElementById("randomelist2").innerHTML=k; 
    
}













/*var list=[];
//var copyList=[];
function add(){
    var name = document.getElementById("text").value ;
    list.push(name);
   // copyList.push(name);

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
function onAdd(){
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
    // document.getElementById("randomelist").innerHTML=listDisplay + ""+list.length;

   //  if(listDisplay.length%2==0){
         chunk=listDisplay.length/2;
     //}

     var d=listDisplay.slice(0,chunk);
     var h=listDisplay.slice(chunk,chunk+listDisplay.length);
     let x = d.join(" <br> ");
     let y = h.join(" <br> ");
     document.getElementById("partTeam1List").innerHTML=x;
     document.getElementById("partTeam2List").innerHTML=y; 
} */

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



