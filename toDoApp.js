//1. Vytvoříme pole objektů

const myToDo = [{
    text: "Vynést koš",
    completion: false,
    number: 10
},{
    text: "Uklidit",
    completion: false,
    number: 5
},{
    text: "Utřít prach",
    completion: false,
    number: 1
},{
    text: "Vysát",
    completion: true,
    number: 1
},{
    text: "Uvařit",
    completion: true,
    number: 2
}];


//Kolik úkolů ještě zbývá udělat

/*const toDo_left = myToDo.filter(function(one_toDo){
    return one_toDo.completion === false
})

const new_paragraph = document.createElement("p")

new_paragraph.textContent = `Počet zbývajících úkolů: ${toDo_left.length}` 
document.querySelector("main").appendChild(new_paragraph)*/

//2 Vypsat všech 5 úkolů a vypsat na stránce


myToDo.forEach(one_element => {
    const text = one_element.text

const new_paragraph_3 = document.createElement("p")

new_paragraph_3.textContent = `${text}`
document.querySelector("#results").appendChild(new_paragraph_3)

})

//3 vypsat jednotlivé úkoly, které nebyly splněny

const new_paragraph_3 = document.createElement("p")
document.querySelector("main").appendChild(new_paragraph_3)

new_paragraph_3.textContent = "Všechny nesplněné úkoly"
new_paragraph_3.style.fontWeight = "bold"                   /* SPÍŠE TO ŘEŠIT V SOUBORU CSS*/


myToDo.forEach(one_element => {
    const incompletion = one_element.completion
        if (incompletion === false) {
            const new_paragraph_4 = document.createElement("p")
            document.querySelector("main").appendChild(new_paragraph_4)
            new_paragraph_4.textContent = `${one_element.text}`
        }
})

/*****
 * Filtrování
 *****/

//Pro ukládání textu z políčka (placeholder="Hledaný text")
const filters = {
    searchingText: ""     // SEM CHCI UKLÁDAT TEN TEXT, KTERÝ SE BUDE ZAPISOVAT DO POLÍČKA

}

// Obecná filtrovací funkce............do ourToDos půjde celý ten OBJEKT myToDo, který napíšeme do funkce, kterou voláme v rámci Načítáme text z políčka: renderToDos(myToDo.filters)
const renderToDos = (ourToDos, weSearching) =>{
    const ourResults = ourToDos.filter((oneToDo) => {
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase()) 
    })
    
    document.querySelector("#toDo_left").innerHTML = ""  

    const toDo_left = ourResults.filter((one_toDo)=>{   //Vytvořím si proměnou do které chci ukládat nesplněné úkoly s false
    return one_toDo.completion === false
    })
   
    const paragraph = document.createElement("p")
    paragraph.textContent = `Ještě zbývá udělat tento počet úkolů: ${toDo_left.length}`
    document.querySelector("#toDo_left").appendChild(paragraph)

    //Vypisování úkolů do stránky
    document.querySelector("#results").innerHTML = ""

    ourResults.forEach((oneResult) => {
        const paragraph_5 = document.createElement("p")
        paragraph_5.textContent = oneResult.text
        document.querySelector("#results").appendChild(paragraph_5)
        })
    }


//Načítáme text z políčka
const searchText = document.querySelector("#search-text") //Výběr id v html, na které se to má navázat
searchText.addEventListener("input", (event)=> {          //Připnutí naslouchače "input" na id="search-text", které se ukládá do proměné searchText     
    filters.searchingText = event.target.value            // Hodnotu event.target.value (najdu jí na webu pod touto cestou) tímto budu ukládat do filters.searchingText. filters.searchingText budu naplňovat hodnotou z políčka


    //Tady budeme volat filtrovací funkci
    renderToDos(myToDo,filters)
})

const myForm = document.querySelector("#formular")
let count = 0 

myForm.addEventListener("submit", (event)=>{
    //vypnu výchozí chování formuláře
    event.preventDefault()

    //vytvořím odstavec do kterého se budou ukládat data zapsané do formuláře

    const paragraph_6 = document.createElement("p")
    paragraph_6.textContent = event.target.elements.addAktivita.value

    document.querySelector("#from-form").appendChild(paragraph_6)

    //po odelání vymažeme z políčka aktivitu

    event.target.elements.addAktivita.value = ""

    //count zvyšujeme o 1

    count = count + 1

    const input = document.createElement("input")
    input.type = "checkbox"
    input.id = `testovaci ${count}`
    console.log(input)
    
    paragraph_6.prepend(input)
    document.querySelector("#from-form").appendChild(paragraph_6)

})


const date_select = document.querySelector("#date_select")
date_select.addEventListener("change",(event)=>{
console.log(event.target.value)
})

//UKÁZKA LOCALSTORAGE
/*LocalStorage ukládá pouze String, ale pokud použijeme tzv. vrátného JSON, tak ten nám převede cokoliv na string a uloží to do localStorage
Když budeme něco z localStorage zase tahat ven, tak JSON to vezme a zase to změní na ten původní formát (čílo, objekt apod.)



//Přidání položky do uložiště
localStorage.setItem("first","Iva")


//Update položky
localStorage.setItem("first","Harry")

//Získání položky
console.log(localStorage.getItem("location"))

//Smazání položky
localStorage.removeItem("first")
localStorage.removeItem("location")
localStorage.clear()
*/


const myToDoJSON = JSON.stringify(myToDo)    // takto převádím objekt na string
localStorage.setItem("myToDo",myToDoJSON)    //takto to ukládám do LocalStorage  

const myToDoFromLS = localStorage.getItem("myToDo") //takto vezmu key z LacalStorage
const myToDoFromJSON = JSON.parse(myToDoFromLS)     //takto převádím z LocalStorage zpět na objekt
console.log(myToDo)

