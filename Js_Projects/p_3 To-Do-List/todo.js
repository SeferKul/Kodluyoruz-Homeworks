//button part
let addButDom= document.querySelector('liveToastBtn');

//input dom
let addTaskDom=document.querySelector("#task")

//input's inner value
let taskinner=""
addTaskDom.addEventListener("change",()=>taskinner=addTaskDom.value )

//list dom
let addListDom=document.querySelector("#list")
//li elements dom


//adding eventlisteners to li elements

function eventlistadder(){ 
    let items=document.querySelectorAll("#list>li")
    for (var i=0;i<items.length;i++){
        items[i].addEventListener("click",liSelected)
        
        let delBut=document.createElement("div")
        delBut.className="close "
        delBut.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>`
        items[i].appendChild(delBut)
        delBut.addEventListener("click",liDelete)
        
        
    }
}

eventlistadder()

// call respond to newElement
function newElement(e){
    if (taskinner==""||taskinner==" "){
            //check the value
            $('#liveToast2').toast('show')

    }
    else{
            addFunc()
            $('#liveToast').toast('show');
    }
}

//task adding part
function addFunc(){
    createdLi=document.createElement("li")
    createdLi.textContent=taskinner
    addListDom.appendChild(createdLi)
    addTaskDom.value="" //reset the input field after each entry
    taskinner=""       //reset the value   "     "    "      "
    eventlistadder()  //adding event listener after addfunction so it can be updated
}


//if a li selected it is gonna change it's class
function liSelected(){
    if (this.className=="checked"){
        this.className="checked::before"
    }else{
        this.className="checked"
    }
}

//delete function
function liDelete(){
    this.parentNode.remove()
}
