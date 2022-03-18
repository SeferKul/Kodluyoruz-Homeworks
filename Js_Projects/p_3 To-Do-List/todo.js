//button part
let addButDom= document.querySelector('liveToastBtn');

//input dom
let addTaskDom=document.querySelector("#task")

//input's inner value
let taskinner=""
addTaskDom.addEventListener("change",()=>taskinner=addTaskDom.value )

//list dom
let addListDom=document.querySelector("#list")


getFromLocal()



//adding eventlisteners to li elements

function eventlistadder(){ 
    let items=document.querySelectorAll("#list>li")            //getting li elements 
    for (var i=0;i<items.length;i++){
        items[i].id=(`li_id${i.toString()}`)          //id creator // object creating
        saveToLocal() 
        items[i].addEventListener("click",liSelected)          // event listener adding
        
        let delBut=document.createElement("div")               //div element created for svg
        delBut.className="close "
        delBut.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>`
        items[i].appendChild(delBut)                            // delete button append to  li elements
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
    createdLi=document.createElement("li")  //create li element
    createdLi.textContent=taskinner         //fill li content
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
    localStorage.removeItem(this.parentNode.id)
}

//to save local storage
function saveToLocal(){
    let innerItems=document.querySelectorAll("#list>li") 
    for (let i=0;i<innerItems.length;i++){
        let keyId=innerItems[i].id
        let IValue=innerItems[i].textContent

        function obforloc(li_id,li_value){
            this.li_id=li_id;
            this.li_value=li_value;
        }
        IValue=IValue.replaceAll('\n','') // problem here
        let taskObj=new obforloc(keyId,IValue);
        console.log(taskObj.li_id)
        

        //localStorage.setItem(`${keyId}`,`{"li_id":"${keyId}","li_value":"${IValue}"}`)
        localStorage.setItem(`li_id${i.toString()}`,JSON.stringify(taskObj))
    }
}

//receive data from local storage
function getFromLocal(){
    
    let noItemLocal= localStorage.length;
    
    for(let i=0;i<noItemLocal;i++){
        let initPars=JSON.parse(localStorage.getItem(`li_id${i.toString()}`))
        let initLi=document.createElement("li");
        try{
            initLi.textContent=initPars.li_value;
        }
        catch(e){
            console.log("null element problem..")
            continue
        }

        addListDom.appendChild(initLi);
        eventlistadder()
    }
}
