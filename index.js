let alllSpan = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");
alllSpan.forEach(span =>{
    span.addEventListener("click",(e) =>{ 
            if(e.target.classList.contains("check-item")){
             checkItem()
              }
              if(e.target.classList.contains("add-item")){
                addItem()
                 }             
                 if(e.target.classList.contains("delete-item")){
                    deleteItem()
                     }
                  if(e.target.classList.contains("show-items")){
                        showItems()
                     }
    })
})
 function showMassage(){
        results.innerHTML = 'Input Cant Be Empty'     
 }
function checkItem(){

if(theInput.value !== '' ){

    if(localStorage.getItem(theInput.value)){

        results.innerHTML = `Found Local Item  Called <span>${theInput.value}</span>`

    }else{
        results.innerHTML = `NO Local Storage Item With The Name    <span>${theInput.value}</span>` 

    }

}else{
    results.innerHTML = 'Input Cant Be Empty' 
}
}
function  addItem(){

    if(theInput.value !== '' ){

localStorage.setItem(theInput.value, "Test");
results.innerHTML = `Local Storage Itm <span>${theInput.value}</span> Added`

theInput.value ='';
    
    }else{
    
    showMassage()
    
    }
    }   
function  deleteItem(){
    if(theInput.value !== '' ){
       if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value)
            results.innerHTML = ` Local Item  Called <span>${theInput.value} Delete</span>`
       }else{
        results.innerHTML =`NO Local Storage Item With The Name    <span>${theInput.value}`
        theInput.value = '';
       }      
            }else{       
            showMassage()    
            }

    }  
function  showItems(){
    if (localStorage.length){
console.log(localStorage.length)
        results.innerHTML ='';console.log()
        for(let [key,value] of Object.entries(localStorage)){
     results.innerHTML +=`<span class="keys">${key}</span>`
        }

    }else{
results.innerHTML = `Local Storage Is Empty `
    }
}