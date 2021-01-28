$(document).ready(function(){
    $('.modal').modal();
 });

  
  function validationForm(){
    var x= document.getElementById("firstname").value ;

    if(!isNaN(x)){
        alert("Enter alphabetic charecter");
    }
   
}


function lastnameValidation(){
     var y=document.getElementById("lastname").value
     if(!isNaN(y)){
         alert("Enter alphabetic charecter");
     }
}

function onCloseform(){

    document.getElementById("containerid").style.display="none";

}

// this function use for Age calculate 
var i=0;
var j=1;
var k=2;
function dateCalculate(){

    var d=new Date();
    var date=document.getElementById("dateform").value;
    var tDate=d.getDate();
    var tMonth=d.getMonth();
    var tYear=d.getFullYear();

    var a= date.split("-");
    var datevalue=tYear-a[i];

    if(tMonth < (a[j]-1)){
     document.getElementById("age").value=datevalue--;
    }

    if(((a[j]-1)==tMonth) && (tDate<a[k])){
        document.getElementById("age").value=datevalue--;
    }
        
   

    document.getElementById("age").value=datevalue;
}


var m=0;
var e=[];
var skill;
//document.getElementById(add_b).addEventListener("click",addskill); 
function addskill()
{
      var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s4";
        var d =document.createElement("div");
        d.className="input-field col s4";
        //div.id=m;

        var inputdata=document.createElement("input");
        var inputex = document.createElement("input");
        inputex.type="text";
        inputex.id="newexpertise";
        inputdata.type="text";
        inputdata.id="newskillId";
        inputdata.name="newSkill";
        inputdata.className="validate";
        
        div.appendChild(inputdata);
        d.appendChild(inputex);
        row.appendChild(div);
        row.appendChild(d);

        var n=document.getElementById("skill").value;
        var z= document.getElementById("expertise").value;
        document.getElementById("newskillId").value=n;
        document.getElementById("newexpertise").value=z;
}


//var participant=[];
/*var b=0;
var projectList=[];
    document.querySelector("form button").addEventListener("click",function(event){
        var participentdata=document.querySelectorAll("form input");
        var participantTeam={};
        for(var i=0;i<participentdata.length;i++){
            participantTeam[participentdata[i].name]=participentdata[i].value;
            participentdata.value=" ";
        }
          participant.push(participantTeam);
          projectList.push(participant.map(item=>item.project));
          document.getElementById("displaydata").innerHTML=projectList[b];
        var jsonformat=JSON.stringify(participantTeam);
        console.log(jsonformat);
        event.preventDefault();
        saveData();
        console.log(participant);
        b++;
        participant.sort(compare);
      //  document.getElementById("projectdata").innerHTML=participant.map(item=>item.Age);
       // document.getElementById("projectdata").innerHTML=participant.map(item=>item.fisrtName) + " "+participant.map(item=>item.project)
        console.log(participant);
    },false)*/


        
    



    function compare(a,b){
        var projectA=a.project.toUpperCase();
        var projectB=b.project.toUpperCase();

        var comparison=0;
        if(projectA > projectB)
        {
            comparison=1;
        }
        else if(projectA <projectB){
            comparison=-1;
        }
        return comparison;
        
    }
    
    function sortProjectdata(){
        var h=document.getElementById("projectdatas")
        var div=document.createElement("div");
    
        document.getElementById("projectdatas").innerHTML=participant.map(item=>item.fisrtName) + " "+participant.map(item=>item.project);
        h.appendChild(div);
    }

    function saveData(){``
 
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("jobprofile").value="";
        document.getElementById("skill").value="";
        document.getElementById("age").value="";
        document.getElementById("experience").value="";
        document.getElementById("dateform").value="";
        document.getElementById("expertise").value="";
        document.getElementById("project").value="";

        
        document.getElementById("default-btn").value="";
        document.getElementById("profile").style.display="none" ;  
        console.log("hello world");
    }
    var a=0;
function createresultcard(w)
{
    var res= document.getElementById("res");
    var card= document.createElement("div");
    card.className="card";
    var cardcontent= document.createElement("div");
    cardcontent.className="card-content";
    cardcontent.id="ad";
    var ptitle= document.createElement("span");
    ptitle.className="card-title activator grey-text text-darken-4";
    var users= document.createElement("span");
    users.id="partname";
    ptitle.innerHTML= participant[a].project;
    users.innerHTML= participant[a].fname;
    
    cardcontent.appendChild(ptitle);
    cardcontent.appendChild(users);
    card.appendChild(cardcontent);
    res.appendChild(card);
    a++;
}


        /*var skillData={};
        var inputs=document.querySelector("form #skillId");
        skillData[inputs.name]=inputs.value;
        var experties=document.querySelector("form #expertiesId");
        skillData[experties.name]=experties.value;
        e.push(skillData);
        console.log(e);
        
        skill=e.map(item=>item.skill);
        expertiesValue=e.map(item=>item.Experties);
        //document.getElementById(m).innerHTML=skill+" : "+expertiesValue +"<br/>";
        console.log(skill);*/
function filter()
{   
        var pro=[];
        var n=[];
        var x=participant.sort(compare);
        for(let i = 0;i<participant.length;i++)
        {   
            pro.push(participant[i].project);
            
            if(participant[i].project==pro[i])
            {
                                          
                    
                     n.push(participant[i].fname);
                    console.log(n);
            }
            

        }
        var newpro = [...new Set(pro)];
        console.log(n);
    console.log(newpro);
    
    }

var participant=[];
const formdiv= document.querySelector('.modal-content'),
form = formdiv.querySelectorAll('#form'),

submitInput = form[0].querySelector('input[type="submit"]');

function getformdata(e)
{    
     e.preventDefault();
    var formdata = new FormData(form[0]); 
     var participantList={};
    var participantdata=document.querySelectorAll("form input");
for(var n=0;n<participantdata.length;n++){

participantList[participantdata[n].name]=participantdata[n].value;
participantdata.value="";
}

participant.push(participantList);


console.log(participant);
createcard(participant);
    saveData();

}
var b=0;
function createcard(e)
{
    var list= document.getElementById("cardlistid");
    var card= document.createElement("div");
    card.className="card";
    var cardimg= document.createElement("div");
    cardimg.className="card-image waves-effect waves-block waves-light";
    var img= document.createElement("img");
    img.className="activator";
    img.src="";
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
   // participant[b].image.value = this.value.substring(12);
//img.src=participant[b].image.substring(12);;

img.src=participant[b].image;
cardimg.appendChild(img);
title.innerHTML=participant[b].fname + " "+participant[b].lname ;
profile.innerHTML=participant[b].profile;
rtitle.innerHTML=participant[b].fname;
icon.innerHTML="close";
date.innerHTML="Date: "+ participant[b].dob;
project.innerHTML="<br/>Projects: " +participant[b].project;
skil.innerHTML="<br/>Skills: "+participant[b].skill;
/*var i=0;
    for(i in participant.skills)
    {   var s = document.createElement("span");
        s.innerHTML=participant[b].skills[i].skill+",";
        skil.appendChild(s);
        
    }*/
   
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
}


document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click',getformdata,false);
},false);
