const addInput = document.querySelector('#addlist');
const addbtn = document.querySelector('#submit');
const ul = document.querySelector('ul');
const li = document.createElement('li')



function addlists(){
    if(addInput.value === ' '){
        
    }
    else{
        const ul = document.querySelector('ul');
        const li = document.createElement('li')
        li.innerHTML = addInput.value;
        addInput.value = ' ' ;
        ul.appendChild(li);
        apenddelete(li);

        saveToLocalStorage();
       
    }
}



function saveToLocalStorage(){
    const listItmes = ul.querySelectorAll('li');
    const itemsArray = [];

    listItmes.forEach(item =>{
        itemsArray.push(item.textContent.trim());
    })
    localStorage.setItem('todoItems', JSON.stringify(itemsArray));
   
}


addbtn.addEventListener('click', ()=>{
    addlists();
})

addInput.addEventListener('keyup',(e)=>{
    if(e.which === 13){
        addlists();
    }
})





function apenddelete(li) {
    
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('fas', 'fa-trash-alt')
    li.appendChild(deletebtn);
    deletebtn.addEventListener('click' ,()=>{
        ul.removeChild(li);

        const savedItems = localStorage.getItem('todoItems');
        if (savedItems) {
            const itemsArray = JSON.parse(savedItems);
            const itemIndex = itemsArray.indexOf(li.textContent.trim()); // Trim before comparing
            if (itemIndex !== -1) {
                itemsArray.splice(itemIndex, 1);
                localStorage.setItem('todoItems', JSON.stringify(itemsArray));
                location.reload()
            }
        }
        
    });
}






document.addEventListener('DOMContentLoaded', () => {
    const savedItems = localStorage.getItem('todoItems');
    if (savedItems) {
        const itemsArray = JSON.parse(savedItems);
        itemsArray.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
            apenddelete(li);
        
           
        });
        
    }
});

