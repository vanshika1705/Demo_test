// openForm function use for the open form

function openForm(){
    document.getElementById("containerid").style.display="block";
  }

  
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
        
    console.log(date);
    console.log(a[0]);

    document.getElementById("age").value=datevalue;
}



var participant=[];
var b=0;
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
        document.getElementById("displaydata").innerHTML=projectList;


        var jsonformat=JSON.stringify(participantTeam);
        console.log(jsonformat);
        event.preventDefault();
        saveData();
        console.log(participant);

    },false)

    function saveData(){
 
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("skillId").value="";
        document.getElementById("age").value="";
        document.getElementById("experience").value="";
        document.getElementById("dateform").value="";
        document.getElementById("expertiesId").value="";
        document.getElementById("projectId").value="";
   
        console.log("hello world");
    }

var m=0;
var e=[];
var skill;
function addSkill(){

    var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s3";
        div.id=m;
        row.appendChild(div);

        var skillData={};
        var inputs=document.querySelector("form #skillId");
        skillData[inputs.name]=inputs.value;

        var experties=document.querySelector("form #expertiesId");
        skillData[experties.name]=experties.value;

        e.push(skillData);
        console.log(e);
        
        skill=e.map(item=>item.skill);

        document.getElementById(m).innerHTML=skill;
        console.log(skill);

}





// skill object
/*
var e=[];
    function skillInput(){
          m++;
    
        var datavalue={};
        
         var inputs=document.querySelectorAll("form .skillclass");
        for(var n=0;n<inputs.length;n++){
    
            datavalue[inputs[n].name]=inputs[n].value;
        }
        //datavalue[inputs.name]=inputs.value;
    
        e.push(datavalue);
    
        console.log(e);
        var m=JSON.stringify(e);
        
    
       // document.getElementById("skilldata").innerHTML=dataskill
    
     }

     var m=0;
     function skillData(){

        var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s3";
        div.id=m;
        row.appendChild(div);

        var skill=e.map(item=>item.skill);
        var experties=e.map(item=>item.Experties);

  document.getElementById(m).innerHTML= skill+" : "+experties;
  //document.getElementById("skillId").value="";
  //document.getElementById("experties").value="";
  
}*/