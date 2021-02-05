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
var o=0;
var d=0;
var s=[];
var skillarr=[]; 
var exparr=[];
function addskill()     
{   
        chipadd();
        var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="field input-field col s3";
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
        
      //  row.appendChild(stardiv);
        row.appendChild(div);
        d++;
        o++;
        document.getElementById("skill").value="";
        document.getElementById("expertise").value="";
        
}

// function to add each row for projects entered in form
var y=0;
var m=0;
var q=[], p=[], op=[], j=[];
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
        for(let i=0;i<a.length;i++)
        {
        projectarr.push(a[i].tag);
        participantList[participantdata[n].name]=projectarr;
      } 
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

 
for(let i=0;i<s.length;i++)  // concadenate expertise array
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
    o=0;
    y=0;
    for(var i=0;i<=q.length;i++){ 
        instance.deleteChip();
     }
}

// to create cards for each user
var b=0,img;
function createcard(e)      
{
    var list= document.getElementById("cardlistid");
    var card= document.createElement("div");
    card.className="card";
    var cardimg= document.createElement("div");
    cardimg.className="card-image waves-effect waves-block waves-light";
    img= document.createElement("img");
    img.className="activator";
    img.id="fileimg";
    uploadimg();
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


cardimg.appendChild(img);
title.innerHTML=participant[b].fname + " "+participant[b].lname ;
profile.innerHTML=participant[b].profile;
rtitle.innerHTML=participant[b].fname;
icon.innerHTML="close";
date.innerHTML="Date: "+ participant[b].dob;
project.innerHTML="<br/>Projects: "+"<br/>" +participant[b].project;
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
//to remove extra colums from project and skill
function removeinputcol()      
{
  for(let i =0; i<o;i++)
    {   var ele = document.getElementById("sdivId");
        ele.parentNode.removeChild(ele);
    }
 for(let i=0;i<y;i++)
 {
    var el = document.getElementById("pdivId");
    el.parentNode.removeChild(el);
 }
}
//filter function to perform filter on radio button pressed
var h=[];
var arr=[];
var ac;
var y;
var star=0;
var qw=[];
var ab=0;
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
    case "level":  
    {     //expertise filter
    removecard();
    
    console.log(op);
    for(var i=0;i<k.length;i++)
    {  
        var skilluser=[];
        qw=[];
        arr=[];
        ab=0;
         createresultcard();
        ptitle.innerHTML=k[i];
    for(var j=0;j<participant.length;j++)
    {   
        for(var g=0;g<participant[j].skill.length;g++)
        {
             if(participant[j].skill[g]==k[i]) 
            {   
            h=participant[j].fname;
           
          arr.push(h);
         ac = participant[j].expertise[g];
         var v= h.concat("  ");
         qw.push(ac);
         qw.sort(endcompare);
            
           // console.log(qw.length);
           
            //console.log(v);
            skilluser.push(v);
            skilluser.sort(endcompare);
            qw.sort(endcompare);
            var brk=skilluser.join("<br>");
            console.log(skilluser);
            //var cv=printstar.sort()
            users.innerHTML=brk;
            
           cnt=0;
            }
            
        }    
        }   
        for(let i=0;i<arr.length;i++)
        {    
             printstar();
    
        }
        
    }
    
}
}

}
var cnt=0;

function printstar()
{ for(let i=0; i<qw[ab];i++)
    { 
   stars=document.createElement("span");
   stars.className="fa fa-star checked";
   stars.id=i;
   star.appendChild(stars);
   }
   const lineBreak = document.createElement('br');
   star.appendChild(lineBreak);
   ab++;
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


 var users, ptitle, cardcontent,star;
function createresultcard(w)        // to create card for result 
{
    
    var res= document.getElementById("res");
    var card= document.createElement("div");
    card.className="card";
    card.id="cardid";
     cardcontent= document.createElement("div");
    cardcontent.className="card-content row";
    cardcontent.id="ad";
     ptitle= document.createElement("span");
    ptitle.className="card-title activator grey-text text-darken-4";
    users= document.createElement("p");
    users.className="col s6";
    users.id="partname";
    star= document.createElement("div");
    star.className="col s6";
    cardcontent.appendChild(ptitle);
    cardcontent.appendChild(users);
    cardcontent.appendChild(star);
    card.appendChild(cardcontent);
    res.appendChild(card);
    counter++;
}
$('.chips').chips();

var instance=M.Chips.getInstance($(".chips"));
var a=instance.chipsData;

function chipadd(){
  
    var chipdata=document.getElementById("rowadd");
    var divchip=document.createElement("div");
    divchip.className="chip col s4";
    divchip.id="divIdchip";
    var spans=document.createElement("span");
    spans.id="json";
    var sp=document.createElement("span");
    sp.id="js";
   // spans.className="chipbutton";
   // spans.innerHTML="&times";
    spans.innerHTML=document.getElementById("skill").value+" | ";
    sp.innerHTML= document.getElementById("expertise").value;
    divchip.appendChild(spans);
    divchip.appendChild(sp);
    chipdata.appendChild(divchip);

}



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCdYiZP_mbcc073RSy63Szj1Hr3ZQrvf08",
    authDomain: "team-maker-303a6.firebaseapp.com",
    projectId: "team-maker-303a6",
    storageBucket: "team-maker-303a6.appspot.com",
    messagingSenderId: "568009366416",
    appId: "1:568009366416:web:06a5473f853e9b55c63115",
    measurementId: "G-0V8RKYVFFW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  function uploadimg(){
    const ref = firebase.storage().ref();
    const file = document.querySelector("#default-btn").files[0]
    const name = new Date() +"-"+ file.name;
    const metadata = {
        contentType:file.type
    }
    const task = ref.child(name).put(file,metadata)
    task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
        img.src=url;
       
    })
  }
