let elTitolo = document.getElementById(`title`);
let elDescription = document.getElementById(`description`);
let btnCreate = document.getElementById(`btnCreate`);
let wrapper = document.getElementById(`wrapper`)


btnCreate.addEventListener(`click`, ()=> {
    if(elTitolo.value != "" && elDescription.value != ""){

        let date = new Date();
        let formatDate = date.toLocaleDateString()
    
        let titleValue = elTitolo.value;
        let descriptionValue = elDescription.value;
   
        let hTitle = document.createElement('h2')
        let pDescription = document.createElement(`p`)
        let pDate = document.createElement(`p`)

        hTitle.innerHTML = titleValue;
        pDescription.innerHTML = descriptionValue;
        pDate.innerHTML = formatDate;

        wrapper.appendChild(hTitle)
        wrapper.appendChild(pDescription)
        wrapper.appendChild(pDate)

        elTitolo.value = ``;
        elDescription.value = ``;
    }else{
        alert(`Riempi tutti i campi richiesti|`);
    }
})
