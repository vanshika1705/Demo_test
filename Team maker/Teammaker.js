const totalparticipant =10;
function createpartlist()
{
    let participant = document.querySelector("#participant");

    let ol = document.createElement('ol');
    ol.setAttribute('id','list');
    let ul =document.createElement('ul');
    ul.setAttribute('id','remove');
    for(let i=0;i <totalparticipant;i++)
    {
        let list = document.createElement('li');
        list.setAttribute('id','list_item');
        let remove = document.createElement('button');
        remove.setAttribute('id','remove_btn');
        remove.addEventListener('click',btnclick);
        ol.appendChild(list);
        ul.appendChild(remove);

    }
    participant.appendChild(ol);
    participant.appendChild(ul);
}
document.getElementsByClassName("add").click= function() 
{
    let text = document.getElementById('text').value;
    document.getElementByID(list_item);
    
}


/*function reset() {
    location.reload();
}
var switcher = document.querySelector('.themebtn');
switcher.addEventListener('click', function()
{
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "dark-theme") {
        this.textContent = "Light mode";
    }
    else {
        this.textContent = "Dark mode";
    }
    
}
)*/
window.onload=()=>{
    createpartlist();
}




