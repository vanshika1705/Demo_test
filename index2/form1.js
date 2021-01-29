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

var d=0;

var skillarr=[]; 
var exparr=[];
function addskill()
{
      var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s4";

        var inputdata=document.createElement("input");
       // var inputex = document.createElement("input");
      //  inputex.type="text";
       // inputex.id=newexpertise;
        //inputex.name="newexpertise";
        //inputex.className="validate";
        inputdata.type="text";
        inputdata.id=d;
        inputdata.name="skillexp";
        inputdata.className="validate";
        
        var x=document.getElementById("skill").value;
        skillarr.push(x);
        var z= document.getElementById("expertise").value;
        exparr.push(z);
        //document.getElementById(newskill).value=x+ " " +"abc";
            inputdata.value=x+"   "+z;
            div.appendChild(inputdata);
            row.appendChild(div);
        d++;
      
        document.getElementById("skill").value="";
        document.getElementById("expertise").value="";
        
}


    function compare(a,b)
    {
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

    function scompare(a,b)
    {
        var skillA=a.skill.toUpperCase();
        var skillB=b.skill.toUpperCase();

        var comparison=0;
        if(skillA > skillB)
        {
            comparison=1;
        }
        else if(skillA <skillB){
            comparison=-1;
        }
        return comparison;
        
    }

    function saveData(){
 
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
    var users, ptitle;
function createresultcard(w)
{
    var res= document.getElementById("res");
    var card= document.createElement("div");
    card.className="card";
    var cardcontent= document.createElement("div");
    cardcontent.className="card-content";
    cardcontent.id="ad";
     ptitle= document.createElement("span");
    ptitle.className="card-title activator grey-text text-darken-4";
    users= document.createElement("p");
    users.id="partname";

    ptitle.innerHTML= newpro[a];
       
    cardcontent.appendChild(ptitle);
    cardcontent.appendChild(users);
    card.appendChild(cardcontent);
    res.appendChild(card);
    a++;
}


        var pro=[];
        var count={};
        var n=[];
        var v=0;
        var c;
        var newpro=[];
function filter()
{     
     var x=participant.sort(compare);
    
    for(let i = 0;i<participant.length;i++)
    {   
      pro.push(participant[i].project);
                
      if(participant[i].project==pro[i])
      {  
          n.push(participant[i].fname);
        }
     }
    newpro = [...new Set(pro)];
    
    pro.forEach(function(i)
    {
        count[i] = (count[i]||0) +1;});
        c = Object.values(count);
        for(let k=0;k<c.length;k++)
         {   
            createresultcard();
            var p=n.slice(v,v+c[k]);
            v+=c[k];
            users.innerHTML= p;
        }

}

var sk=[];
function skillfilter()
{
    var x=participant.sort(scompare);
    console.log(x);
    /*
    for(let i = 0;i<participant.length;i++)
    {   
      sk.push(participant[i].skill);
                
      if(participant[i].project==sk[i])
      {  
          n.push(participant[i].fname);
        }
     }
    newpro = [...new Set(pro)];
    
    pro.forEach(function(i)
    {
        count[i] = (count[i]||0) +1;});
        c = Object.values(count);
        for(let k=0;k<c.length;k++)
         {   
            createresultcard();
            var p=n.slice(v,v+c[k]);
            v+=c[k];
            users.innerHTML= p;
        }*/
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

   participantdata.value="";
   }

   participant.push(participantList);    
  // console.log(participant);

   participant.sort(compare);

   console.log(participant);
  
createcard(participant);
    saveData();
    skillarr=[];
    exparr=[];

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
