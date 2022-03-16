let uN= document.querySelector("#user_name");
let uT= document.querySelector("#user_tel");
let uA= document.querySelector("#user_adress");
let sB= document.querySelector("#subform");
console.log(sB)
sB.addEventListener("submit",handSubmit);
uN.addEventListener("change",handChange);
uT.addEventListener("change",handChange);
uA.addEventListener("change",handChange);



let userName;
let userTelNo;
let user_Addres;


function handSubmit(e){
    e.preventDefault();
    console.log("User Name:"+userName+"User Tel:"+userTelNo+"User Address:"+userAddres)}

function handChange(){
    
    if (this.name=="user_name"){
        userName=this.value;
        localStorage.setItem(this.name.toString(),this.value)
        console.log(userName)
    }
    if (this.name=="user_tel"){
        userTelNo=uT.value;
        localStorage.setItem(this.name.toString(),this.value)
        console.log(userTelNo)
    }
    if (this.name=="user_adress"){
        userAddres=uA.value;
        localStorage.setItem(this.name.toString(),this.value)
        console.log(uA.name+userAddres)
    }
}
