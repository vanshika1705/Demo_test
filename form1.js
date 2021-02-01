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

// function to calculate age from date 
var i=0;
var j=1;
var k=2;
function dateCalculate()            
{
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

// function to add each row for skills and expertise entered in form
var counter=0;
var e=0;
var d=0;
var s=[];
var skillarr=[]; 
var exparr=[];
function addskill()     
{
      var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="field input-field col s4";
        div.id="sdivId";
        var inputdata=document.createElement("input");
        inputdata.type="text";
        inputdata.id=d;
        inputdata.name="skillexp";
        inputdata.className="input";
        
        var x=document.getElementById("skill").value;
        skillarr.push(x);
        skillarr.sort();
        var z= document.getElementById("expertise").value;
        exparr.push(z);
        inputdata.value=x+"   "+z;
        div.appendChild(inputdata);
        row.appendChild(div);
        d++;
        e++;
        document.getElementById("skill").value="";
        document.getElementById("expertise").value="";
        
}

// function to add each row for projects entered in form
var y=0;
var m=0;
var q=[];
var projectarr=[]; 
function addproject()           
{       
      var row=document.getElementById("prowadd");
        var div=document.createElement("div");
        div.className="field input-field col s4";
        div.id="pdivId";
        var inputdata=document.createElement("input");
        inputdata.type="text";
        inputdata.id=m;
        inputdata.name="projectinput";
        inputdata.className="input";
        
        var x=document.getElementById("project").value;
        projectarr.push(x);
        projectarr.sort();
               
            inputdata.value=x;
            div.appendChild(inputdata);
            row.appendChild(div);
        m++;
        y++;
        document.getElementById("project").value="";
        
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click',getformdata,false);
},false);

var f=0;
var u=[],k=[]; // arrays used for skill concadenation
var w=[],t=[]; // arrays used for project concadenation

var participant=[];
const formdiv= document.querySelector('.modal-content'),
form = formdiv.querySelectorAll('#form'),

submitInput = form[0].querySelector('input[type="submit"]');

//to get data from from
function getformdata(e)             
{    
     e.preventDefault(); 
     var participantList={};
    var participantdata=document.querySelectorAll("form input");
for(var n=0;n<participantdata.length;n++){

participantList[participantdata[n].name]=participantdata[n].value;
    if(participantdata[n].name=="skill")
    {   
     participantList[participantdata[n].name]=skillarr;  
     console.log(participantdata[n].name);    
    }
   else if(participantdata[n].name=="expertise")
    {   
     participantList[participantdata[n].name]=exparr;  
     console.log(participantdata[n].name);    
    }
    else if(participantdata[n].name=="project")
    {   
     participantList[participantdata[n].name]=projectarr;  
     console.log(participantdata[n].name);    
    }

   participantdata.value="";
   }

   participant.push(participantList);    
  
   console.log(participant);
   q.push(projectarr);
   s.push(skillarr);
 
    for(let i=0;i<q.length;i++)     // concadenate project array
    {
    w=w.concat(q[i]);
    }
    t=[...new Set(w)];
    t.sort(function(a,b)
    {
      let x= a.toLowerCase();
      let y= b.toLowerCase();
      if(x<y) {return -1;}
      if(x>y){return 1}
      return 0;
  });
 
   for(let i=0;i<s.length;i++)  // concadenate skill array
   {
    u=u.concat(s[i]);
   }
   k=[...new Set(u)];
  k.sort(function(a,b)
  {
    let x= a.toLowerCase();
    let y= b.toLowerCase();
    if(x<y) {return -1;}
    if(x>y){return 1}
    return 0;
});
createcard(participant);
    saveData();
    skillarr=[];
    exparr=[];
    projectarr=[];
    removeinputcol();
    e=0;
    y=0;
}

// to create cards for each user
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

img.src=participant[b].image;
cardimg.appendChild(img);
title.innerHTML=participant[b].fname + " "+participant[b].lname ;
profile.innerHTML=participant[b].profile;
rtitle.innerHTML=participant[b].fname;
icon.innerHTML="close";
date.innerHTML="Date: "+ participant[b].dob;
project.innerHTML="<br/>Projects: "+"<br/>" +participant[b].project.join("<br/>");
skil.innerHTML="<br/>Skills: "+participant[b].skill;
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

// clears all input fields from form once submitted
function saveData(){
 
       
    document.getElementById("profile").style.display="none" ;  
    var input= document.getElementsByTagName("input");
    for(let i = 0; i<input.length;i++)
    {
        if(input[i].value!="Submit")
             input[i].value="";
    }
}
function removeinputcol()      
{
  for(let i =0; i<e;i++)
    {   let ele = document.getElementById("sdivId");
        ele.parentNode.removeChild(ele);
    }
 for(let i=0;i<y;i++)
 {
    let ele = document.getElementById("pdivId");
    ele.parentNode.removeChild(ele);
 }
}
//filter function to perform filter on radio button pressed
var h=[];
var y;
function filter(y)      
{
  switch (y)
  { 
    case "projects" :       //project filter
     removecard();
    for(var i=0;i<t.length;i++)
    {  
        var projectuser=[];
         createresultcard();
        ptitle.innerHTML=t[i];
      for(var j=0;j<participant.length;j++)
      {   
        for(var g=0;g<participant[j].project.length;g++)
        {
             if(participant[j].project[g]==t[i]) 
            {   
            h=participant[j].fname;
            projectuser.push(h);
            var brk = projectuser.join("<br/>");
            users.innerHTML=brk;
            }
            
        }
       }
    }

  break;
    case "skills":      //skill filter
    removecard();
    for(var i=0;i<k.length;i++)
    {  
        var skilluser=[];
        createresultcard();
        ptitle.innerHTML=k[i];
        for(var j=0;j<participant.length;j++)
        {   
         for(var g=0;g<participant[j].skill.length;g++)
         {
            if(participant[j].skill[g]==k[i]) 
            {   
            h=participant[j].fname;
            skilluser.push(h);
            var brk=skilluser.join("<br/>");
            users.innerHTML=brk;
            }
            
         }
        }
    }
  break;
    case "level":       //expertise filter
    removecard();
    for(var i=0;i<k.length;i++)
    {  
        var skilluser=[];
         createresultcard();
        ptitle.innerHTML=k[i];
    for(var j=0;j<participant.length;j++)
    {   
        for(var g=0;g<participant[j].skill.length;g++)
        {
             if(participant[j].skill[g]==k[i]) 
            {   
            h=participant[j].fname;
            q=participant[j].expertise[g];
           var v= h.concat("  ",q);
            console.log(v);
            skilluser.push(v);
            skilluser.sort(endcompare);
            var brk=skilluser.join("<br/>");
            console.log(skilluser);
            users.innerHTML=brk;
            }
            
        }
    }
    }
}
}
// compares users according to their expertise in skill
function endcompare(a,b){       
     
    if(a.slice(-1)<b.slice(-1)) return 1;
    if(a.slice(-1)>b.slice(-1)) return -1;
    return 0;   
}

 // remove cards from result section when once filter is applied and want to apply again
function removecard()      
{
if(document.getElementsByClassName("radiobtn"))
{
    for(let i =0; i<counter;i++)
    {   
        var element = document. getElementById("cardid");
        element.parentNode. removeChild(element);
        
    }
    counter=0;
}
}



 var users, ptitle;
function createresultcard(w)        // to create card for result 
{
    
    var res= document.getElementById("res");
    var card= document.createElement("div");
    card.className="card";
    card.id="cardid";
    var cardcontent= document.createElement("div");
    cardcontent.className="card-content";
    cardcontent.id="ad";
     ptitle= document.createElement("span");
    ptitle.className="card-title activator grey-text text-darken-4";
    users= document.createElement("p");
    users.id="partname";
    cardcontent.appendChild(ptitle);
    cardcontent.appendChild(users);
    card.appendChild(cardcontent);
    res.appendChild(card);
    counter++;
}


