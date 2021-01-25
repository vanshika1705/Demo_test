// openForm function use for the open form
function openForm(){
    document.getElementById("containerid").style.display="block";
  }

// this function use for validation of input text 
  
  function validationForm(){
      var x= document.getElementById("firstname").value ;

      if(!isNaN(x)){
          alert("Enter alphabetic charecter");
      }
     
  }

  // this function use for validation last name input text 

  function lastnameValidation(){
       var y=document.getElementById("lastname").value
       if(!isNaN(y)){
           alert("Enter alphabetic charecter");
       }
  }

//oncloseform use for close form
function onCloseform(){

    document.getElementById("containerid").style.display="none";

}
function claculateAge(){


}
// this function use for Age calculate 
function dateCalculate(){

    var d=new Date();
    var date=document.getElementById("dateform").value;
    var tDate=d.getDate();
    var tMonth=d.getMonth();
    var tYear=d.getFullYear();

    var a= date.split("-");
    var datevalue=tYear-a[0];

    if(tMonth < (a[1]-1)){
     document.getElementById("age").value=datevalue--;
    }

    if(((a[1]-1)==tMonth) && (tDate<a[2])){
        document.getElementById("age").value=datevalue--;
    }
        
    console.log(date);
    console.log(a[0]);

    document.getElementById("age").value=datevalue;
}

// skill data show the skill and experties value and display in 

var dataskill;
var dataExpert;
var m=0;
function skillData(){

        var row=document.getElementById("rowadd");
        var div=document.createElement("div");
        div.className="input-field col s3";
        div.id=m;
        row.appendChild(div);

  document.getElementById(m).innerHTML= dataskill +" : "+dataExpert;
  document.getElementById("skill").value="";
  document.getElementById("experties").value="";
}
 function skillInput(){
     dataskill=document.getElementById("skill").value;
     dataExpert=document.getElementById("experties").value
      m++;

   // document.getElementById("skilldata").innerHTML=dataskill

 }


var participentdata=[{
    name :"ABC",
    last :"jkl"
}] 

console.log(JSON.stringify(participentdata));
console.log(participentdata);


