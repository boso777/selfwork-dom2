//catturo gli elemnti html da manipolare

let elTitolo = document.getElementById(`title`);
let elDescription = document.getElementById(`description`);
let btnCreate = document.getElementById(`btnCreate`);
let wrapper = document.getElementById(`wrapper`)


btnCreate.addEventListener(`click`, ()=> {

    //condizione che verifica se c'è del testo inserito o meno

    if(elTitolo.value != "" && elDescription.value != ""){

        //trasformo la data da oggetto a primitivo, lo metto in una variabile

        let date = new Date();
        let formatDate = date.toLocaleDateString()
    
        //catturo i valori inseriti dall'utente e li inserisco in una variabile

        let titleValue = elTitolo.value;
        let descriptionValue = elDescription.value;
   
        //creo gli elementi html che ospiteranno i valori inseriti dall'utente e li inserisco in una variabile

        let hTitle = document.createElement('h2')
        let pDescription = document.createElement(`p`)
        let pDate = document.createElement(`p`)

        //associo all'inner html degli elementi creati in precedenza, il value inserito dall'utente catturato prima

        hTitle.innerHTML = titleValue;
        pDescription.innerHTML = descriptionValue;
        pDate.innerHTML = formatDate;

        //inserisco gli elementi `riempiti` nel div wrapper 

        wrapper.appendChild(hTitle)
        wrapper.appendChild(pDescription)
        wrapper.appendChild(pDate)

        //azzero il value per far si che l'utente inserisca altri valori

        elTitolo.value = ``;
        elDescription.value = ``;
    }else{
        alert(`Riempi tutti i campi richiesti|`);
        elTitolo.value = ``;
        elDescription.value = ``;
    }
})
