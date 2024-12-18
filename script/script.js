/*
*Descrizione*
- Attraverso l'apposita API di Boolean
  https://flynn.boolean.careers/exercises/api/random/mail
  generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*Bonus*
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/


const myList = document.getElementById("emails");

const generateMails = document.querySelector(".btn-success");
generateMails.addEventListener("click", createList);

const cancel = document.querySelector(".btn-danger");

cancel.addEventListener("click", () => {
    myList.innerHTML = "";
});


function createList() {
    myList.innerHTML = "";
    let mailAddresses = []
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((address) => {
            let eMail = address.data.response
            mailAddresses.push(eMail);
            myList.innerHTML += `
            <li class="px-2 my-2">
            <span class="fa-li"><i class="fa-regular fa-envelope"></i></span>
            ${eMail}</li>`
        });
    }
}
