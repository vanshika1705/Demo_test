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

        var x = document.createTextNode(teamList[b]);

    h3.appendChild(x);                  
    resHead.appendChild(h3);
    resHead.appendChild(res);
    teamresult.appendChild(resHead);
    b++;

    var d=datalist.slice(n,n+splitList).join("<br/>");
    n+=splitList;


    return document.getElementById(m).innerHTML=d;

}

//this start function is used to genrate team

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
    
     for(var i=0;i<teamList.length;i++){
            divNumber(randomelistDisplay);
            m++;
        } 

}


function reset() {
    location.reload();
}
