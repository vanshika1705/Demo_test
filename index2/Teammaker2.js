
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

*/


fetch("team.json")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);

      
    })
    
    for(i=0;i<data.participant.length;i++)
    {
        cardDisplay(data);
        a++;
    }

var a=1;
var b=0;
function cardDisplay(card)
{
    var list= document.getElementsByClassName("card_list");
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
    var date=document.createElement("span");
    date.id="date";
    var project=document.createElement("span");
    project.id="project";
    var skills=document.createElement("span");
    skills.id="skills";
    var br=document.createElement("br");
        img.src=data.participant[b].picture;
    cardimg.appendChild(img);
    var x = document.createTextNode(data.participant[b].name);
    var y = document.createTextNode(data.participant[b].profile);
    title.appendChild(x);
    profile.appendChild(y);
    cardcontent.appendChild(title);
    cardcontent.appendChild(profile);
    rtitle.appendChild(x);
    var z = document.createTextNode(data.participant[b].dob);
    var k= document.createTextNode(data.participant[b].project);
    var w = document.createTextNode(data.participant[b].skills);
    date.appendChild(z);
    project.appendChild(k);
    skills.appendChild(w);
    reveal.appendChild(date);
    reveal.appendChild(dproject);
    reveal.appendChild(skills);
    card.appendChild(cardimg);
    card.appendChild(cardcontent);
    card.appendChild(reveal);
    list.appendChild(card);
    b++;
    


}



