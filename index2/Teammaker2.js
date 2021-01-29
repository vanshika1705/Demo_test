
//Adding participant name in participant list
/*
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



var a=1;
var b=0;
function fetchcontent(content)
{

fetch(content)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
   //  console.log(data);
    var list= document.getElementById("cardlistid");
    var card= document.createElement("div");
    card.className="card";
    var cardimg= document.createElement("div");
    cardimg.className="card-image waves-effect waves-block waves-light";
    var img= document.createElement("img");
    img.className="activator";
    var cardcontent= document.createElement("div");
    cardcontent.className="card-content";
    cardcontent.id="ad";
    var title= document.createElement("span");
    title.className="card-title activator grey-text text-darken-4";
    var profile= document.createElement("span");
    profile.id="jobprofile";
    var reveal= document.createElement("div");
    reveal.className="card-reveal";
    var rtitle= document.createElement("span");
    rtitle.className="card-title grey-text text-darken-4";
    var icon= document.createElement("i");
    icon.className="material-icons right";
    var date=document.createElement("span");
    date.id="date";
    var project=document.createElement("span");
    project.id="project";
    var skil=document.createElement("span");
    skil.id="skills";
    
    
    img.src=data.participant[b].picture;
    cardimg.appendChild(img);
    title.innerHTML=data.participant[b].name.first + " "+data.participant[b].name.last ;
    profile.innerHTML=data.participant[b].profile;
    rtitle.innerHTML=data.participant[b].name.first;
    icon.innerHTML="close";
    date.innerHTML="Date: "+ data.participant[b].dob;
    project.innerHTML="<br/>Projects: " + data.participant[b].project;
    
   skil.innerHTML="<br/>Skills: ";
   var i=0;
        for(i in data.participant[b].skills)
        {   var s = document.createElement("span");
            s.innerHTML=data.participant[b].skills[i].skill+",";
            skil.appendChild(s);
            
        }
       
    cardcontent.appendChild(title);
    cardcontent.appendChild(profile);
    rtitle.appendChild(icon);
    reveal.appendChild(rtitle);
    reveal.appendChild(date);
    reveal.appendChild(project);
    reveal.appendChild(skil);
    card.appendChild(cardimg);
    card.appendChild(cardcontent);
    card.appendChild(reveal);
    list.appendChild(card);
    b++;
    
      
    })
}
for(let i= 0; i<5;i++)
{
    fetchcontent("team.json");
}
*/
