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


    var participant=[];
    const formdiv= document.querySelector('.container'),
    form = formdiv.querySelectorAll('#form'),
    submitInput = form[0].querySelector('input[type="Submit"]');

    function getformdata(e)
    {
        e.preventDefault();
        var formdata = new FormData(form[0]);
        var fname={};
        var particiapntdata=document.querySelectorAll("form input");
        for(var n=0;n<particiapntdata.length;n++){

        fname[particiapntdata[n].name]=particiapntdata[n].value;
        particiapntdata.value="";
        }

        participant.push(fname);
        participant.sort(compare);

        console.log(participant);

        for(var pair of formdata.entries()){
            console.log(pair[0]+" , "+pair[1]);
        }

        saveData();


       // fname=formdata.get(fname);
        //var fname=formdata.get("lastName");    
        //var age = formdata.get('Age');      
        console.log(formdata);
       // console.log(age);
        
        
    }
    document.addEventListener('DOMContentLoaded', function(){
        submitInput.addEventListener('click',getformdata,false);
    },false);


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
    
        document.getElementById("projectdatas").innerHTML=participant.map(item=>item.fisrtName) + " "+participant.map(item=>item.project)
        
        h.appendChild(div);
    }



    function saveData(){
 
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("skillId").value="";
        document.getElementById("age").value="";
        document.getElementById("experience").value="";
        document.getElementById("dateform").value="";
        document.getElementById("expertiesId").value="";
        document.getElementById("projectId").value="";
        document.getElementById("containerid").style.display="none";
   
        console.log("hello world");
    }

console.log(participant);

var m=0;
var e=[];
var skill;
function addSkill(){

    var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s4";
        //div.id=m;

        var inputdata=document.createElement("input");
        inputdata.type="text";
        inputdata.id="newskillId";
        inputdata.name="newSkill";
        inputdata.className="validate";
      
        div.appendChild(inputdata);
        row.appendChild(div);

        var n=document.getElementById("skillId").value;
        document.getElementById("newskillId").value=n;


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